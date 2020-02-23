import * as config from '../config';

import Utils from '../util'
import {Block, Chain} from '../block/block';
import { Transaction } from './transaction';
 

export class Wallet { 
    privateKey: any;
    publicKey: any;

    totalAmount: number;

    // used for recalculation of balance
    timestamp: number;

    // used for checking when this block was last calculated;
    lastBlockCalc: number;

    constructor() {

        this.privateKey = Utils.getKeyPair();
        this.publicKey = this.privateKey.getPublic().encode('hex');
        this.totalAmount = config.INITIAL_WALLET_BALANCE;
        this.lastBlockCalc = 0;
        this.timestamp = 0;

    }


    calculateBalance(blockchain: Chain): number{  

        // this is the updated last timestamp that we check on our block
        this.timestamp = blockchain.chain[blockchain.chain.length - 1].timestamp;

        // get the balance of the wallet currently
        let balance = this.totalAmount;
        let newTransaction: Transaction[] = [];
        // Check to see if it is already updated
        if(this.lastBlockCalc === this.timestamp && this.lastBlockCalc > 0) { 
            return this.totalAmount;
        }

        // If it is not...
        let indexToBeUpdated = 0;
        // let blocks: Block[] = blockchain.chains;

        // Start from the end of the chain and check to see if you find the unupdated node
        for(let i=blockchain.chain.length - 1; i >=0 ; i--) {
            if(this.lastBlockCalc === this.timestamp) {
                indexToBeUpdated += 1;
            }
        }

        // Start updating from the new index
        for(let i=indexToBeUpdated; i <= blockchain.chain.length - 1; i++) {
            // data contained in the new transaction
            let transactions: Transaction[] = <Transaction []> blockchain.chain[i].data;
            for(let j=0; j <= blockchain.chain.length; j++) {
                newTransaction.push(transactions[j]);
            }
        }

        // Take the data and get the public key from the transactions
        const publicKeys: [] = [];

        // filter over the transactions to get the keys (WITHDRAWALS)
        const withdrawals = newTransaction.filter((e) => {
            e.input.address === this.publicKey;
        });

        // DEPOSITS
        const deposits = newTransaction.filter((e) => {
            if(!e.input.amount) {
                console.log('no deposits');
            } 
            this.totalAmount < e.input.amount;
        });
    }

}    