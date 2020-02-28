/**
 * Block which has not been mined
 */
export interface UnsignedBlock {
    lastHash: string;
    nonce: number;
    timestamp: number;
    data: any;
}

/**
 * Mined block
 */
export interface SignedBlock extends UnsignedBlock {
    hash: string;
}

/**
 * Transaction
 */

export interface Transaction {
    address: string;
    input: TransactionInput;
    output: TransactionOutput;
}

/**
 * Transaction Input
 */
export interface TransactionInput {
    senderAddress: string;
    senderBalance: number;
    amount: number;
}

/**
 * Transaction Output
 */
export interface TransactionOutput {
    receiverAddress: string;
    receiverBalance: number
}




