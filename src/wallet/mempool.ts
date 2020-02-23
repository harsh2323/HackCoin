/**
 * Collection of transactions waiting to be mined 
 * 
 * Stay in the memory until a miner picks this block up
 */
import { Transaction } from './transaction';

 export class Mempool { 
    UnfinishedTransactions: Transaction[] = [];

    constructor() {
        this.UnfinishedTransactions = [];
    }

    clear() {
        this.UnfinishedTransactions = [];
    }

    /** 
     * Add or Update the blocks in the mempool
     */
    addUpdatePool(transaction: Transaction): void {
        let idFound: Transaction = <Transaction> this.UnfinishedTransactions.find(
            tx => tx.id == transaction.id
        );

        // if id is found then, it is already there so replace the current value
        if(idFound) {
            this.UnfinishedTransactions[this.UnfinishedTransactions.indexOf(idFound)] = transaction;
        } else {
            // The id doesn't exist so add it
            this.UnfinishedTransactions.push(transaction);

        }
    } 
 }