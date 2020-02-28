import  Utils  from '../util'

import { Transaction } from '../block/interface'

/**
 * The Transaction bloc which controls all the outgoing transasctions
 */
export function getNewTransactions(address: string, senderBalance: number, senderAmount: number, receiverBalance: number, senderPublicKey: string): Transaction {
    // if the amount the sender sends exceeds the amount in their balance then throw an error
    if( senderAmount > senderBalance ) { 
        throw new RangeError('You dont have a sufficient balance to send this amount');
    }

    //otherwise.. 
    return {
        address: Utils.genID(),
        input: {
            senderAddress: senderPublicKey,
            senderBalance: senderBalance,
            amount: senderAmount,
        },
        output: {
            receiverAddress: address,
            receiverBalance: receiverBalance
        }
    }
}