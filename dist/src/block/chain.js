"use strict";
/**
 * Chain of Blocks
 */
Object.defineProperty(exports, "__esModule", { value: true });
var block_1 = require("./block");
var Chain = /** @class */ (function () {
    function Chain() {
        this.chain = [block_1.Block.firstBlock()];
    }
    // Adding a new block to this chain
    Chain.addChain = function (data) {
        // Since the Miner is not ready, put the same data in
        var newBlock = data;
        this.chain.push(newBlock);
        return newBlock;
    };
    return Chain;
}());
exports.default = Chain;
