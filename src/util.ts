/**
 * This is used to create public and private keys used for wallets
 * 
 */
var EC = require('elliptic').ec;

const uuid1 = require('uuid/v1');

import { sha256, sha224 } from 'js-sha256';

var ec = new EC('secp256k1');

export default class Utils {

    // KeyPair for wallet 
    static getKeyPair(){ 
        // Keep recursing over for a new pair eveytime you call it
        return ec.genKeyPair();
    }

    // generating id for a transaction
    static genID() { 
        return uuid1();
    }
}