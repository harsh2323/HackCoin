import * as config from '../config';

import Utils from '../util'
import {Block, Chain} from '../block/block';
 

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
        

    }

}