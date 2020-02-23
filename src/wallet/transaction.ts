import  Utils  from '../util'

import {UnsignedBlock, SignedBlock} from '../block/interface';

/**
 * The Transaction class which controls all the outgoing transasctions
 */
export class Transaction { 
    id: string;
    input!: UnsignedBlock;
    output: SignedBlock[];

    constructor() {
        this.id = Utils.genID();
        this.output = []

    }
}