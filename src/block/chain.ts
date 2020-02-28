/**
 * Chain of Blocks
 */

import { Block } from './block';


export default class Chain {
    chain: Block[];
    static chain: Block[];

    constructor() {
        this.chain = [Block.firstBlock()];
    }

    // Adding a new block to this chain
    static addChain(data: any): Block {
        // Since the Miner is not ready, put the same data in
        const newBlock = data;

        this.chain.push(newBlock);

        return newBlock;
    }
}