"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This is used to create public and private keys used for wallets
 *
 */
var EC = require('elliptic').ec;
var uuid1 = require('uuid/v1');
var ec = new EC('secp256k1');
var Utils = /** @class */ (function () {
    function Utils() {
    }
    // KeyPair for wallet 
    Utils.getKeyPair = function () {
        // Keep recursing over for a new pair eveytime you call it
        return ec.genKeyPair();
    };
    // generating id for a transaction
    Utils.genID = function () {
        return uuid1();
    };
    return Utils;
}());
exports.default = Utils;
