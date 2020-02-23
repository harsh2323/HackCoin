/**
 * Can be used as an input
 */
export interface UnsignedBlock { 
    lastHash: string;
    nonce: number;
    timestamp: number;
    data: any;
}

/**
 * Output
 */
export interface SignedBlock extends UnsignedBlock {
    hash: string;
}