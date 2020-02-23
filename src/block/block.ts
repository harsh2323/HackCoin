import { sha256, sha224 } from 'js-sha256';

import { Transaction, TextInput, TextOutput}  from '../wallet/transaction'
/**
 * Chain of Blocks
 */
export class Chain {
    chain: Block[];

    constructor() { 
        // The cahin is an array of blocks
        this.chain = [Block.firstBlock()];
    }

    static addNewBlock(block: Block) { 
        //if it is verified then add it to the chain
        if(block.data)
    }
}
/**
 * Basic Block structure in the Chain
 */
export class Block {
    lastHash: string;
    hash: string;
    nonce: number;
    timestamp: number;
    data: any;

    constructor(lastHash: string, hash: string, nonce: number, timestamp: number, data: any) {
        this.lastHash = lastHash;
        this.hash = hash;
        this.nonce = nonce;
        this.timestamp = timestamp;
        // data is transaction
        this.data = data;

    }

    // First block in the chain
    static firstBlock(): Block {
        let firstTransac: Transaction = new Transaction();
        firstTransac.id = 'firstBlock';
        firstTransac.input = new TextInput(0,'----');
 
        return new Block('','f1r4th4sh',0,0,firstTransac)

    }

    // function that generates a random hash
    static generateHash(data: string): string { 
        return sha256(data);
    }

}