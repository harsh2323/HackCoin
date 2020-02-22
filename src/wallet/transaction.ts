import  Utils  from '../util'

/**
 * What a transaction input looks like
 * this includes a signature which is not verified
 */
export class TextInput {
    amount: number;
    address: string;
    timestamp: number;
    signature: string;

    constructor(amount: number, address: string) { 
        this.amount = amount;
        this.address = address;
    }

}

export class TextOutput { 
    amount: number;
    address: string; 
    vSignature: string;

}

/**
 * The Transaction class which controls all the outgoing transasctions
 */
export class Transaction { 
    id: string;
    input: TextInput;
    output: TextOutput[];

    constructor() {
        this.id = Utils.genID();
        this.output = []

    }
}