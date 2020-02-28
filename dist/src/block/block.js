"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var js_sha256_1 = require("js-sha256");
var transaction_1 = require("../wallet/transaction");
/**
 * Basic Block structure in the Chain
 */
var Block = /** @class */ (function () {
    function Block(lastHash, hash, nonce, timestamp, data) {
        this.lastHash = lastHash;
        this.hash = hash;
        this.nonce = nonce;
        this.timestamp = timestamp;
        // data is transaction
        this.data = data;
    }
    // First block in the chain
    Block.firstBlock = function () {
        var firstTransac = new transaction_1.Transaction();
        firstTransac.id = 'firstBlock';
        firstTransac.input = new transaction_1.Transaction();
        return new Block('', 'f1r4th4sh', 0, 0, firstTransac);
    };
    // function that generates a random hash
    Block.generateHash = function (data) {
        return js_sha256_1.sha256(data);
    };
    return Block;
}());
exports.Block = Block;
