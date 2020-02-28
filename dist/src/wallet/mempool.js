"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mempool = /** @class */ (function () {
    function Mempool() {
        this.UnfinishedTransactions = [];
        this.UnfinishedTransactions = [];
    }
    Mempool.prototype.clear = function () {
        this.UnfinishedTransactions = [];
    };
    /**
     * Add or Update the blocks in the mempool
     */
    Mempool.prototype.addUpdatePool = function (transaction) {
        var idFound = this.UnfinishedTransactions.find(function (tx) { return tx.id == transaction.id; });
        // if id is found then, it is already there so replace the current value
        if (idFound) {
            this.UnfinishedTransactions[this.UnfinishedTransactions.indexOf(idFound)] = transaction;
        }
        else {
            // The id doesn't exist so add it
            this.UnfinishedTransactions.push(transaction);
        }
    };
    return Mempool;
}());
exports.Mempool = Mempool;
