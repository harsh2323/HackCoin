"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config = __importStar(require("../config"));
var util_1 = __importDefault(require("../util"));
var Wallet = /** @class */ (function () {
    function Wallet() {
        this.privateKey = util_1.default.getKeyPair();
        this.publicKey = this.privateKey.getPublic().encode('hex');
        this.totalAmount = config.INITIAL_WALLET_BALANCE;
        this.lastBlockCalc = 0;
        this.timestamp = 0;
    }
    Wallet.prototype.calculateBalance = function (blockchain) {
        var _this = this;
        // this is the updated last timestamp that we check on our block
        this.timestamp = blockchain.chain[blockchain.chain.length - 1].timestamp;
        // get the balance of the wallet currently
        var balance = this.totalAmount;
        var newTransaction = [];
        // Check to see if it is already updated
        if (this.lastBlockCalc === this.timestamp && this.lastBlockCalc > 0) {
            return this.totalAmount;
        }
        // If it is not...
        var indexToBeUpdated = 0;
        // let blocks: Block[] = blockchain.chains;
        // Start from the end of the chain and check to see if you find the unupdated node
        for (var i = blockchain.chain.length - 1; i >= 0; i--) {
            if (this.lastBlockCalc === this.timestamp) {
                indexToBeUpdated += 1;
            }
        }
        // Start updating from the new index
        for (var i = indexToBeUpdated; i <= blockchain.chain.length - 1; i++) {
            // data contained in the new transaction
            var transactions = blockchain.chain[i].data;
            for (var j = 0; j <= blockchain.chain.length; j++) {
                newTransaction.push(transactions[j]);
            }
        }
        // Take the data and get the public key from the transactions
        var publicKeys = [];
        // filter over the transactions to get the keys (WITHDRAWALS)
        var withdrawals = newTransaction.filter(function (e) {
            e.input.address === _this.publicKey;
        });
        // DEPOSITS
        var newDeposits = newTransaction.filter(function (e) {
            for (var i = 0; i < e.output.length; i++) {
                if (e.output[i].address === _this.publicKey && e.input[i].address != _this.publicKey) {
                    return true;
                }
            }
        });
        // Subtract the withdrawals from the total balance
        for (var i = 0; i < withdrawals.length; i++) {
            for (var j = 0; j < withdrawals[i].output.length; j++) {
                balance -= withdrawals[i].output[j].totalAmount;
            }
        }
        // Add all the deposits to the total balance
        for (var i = 0; i < newDeposits.length; i++) {
            for (var j = 0; j < newDeposits[i].output.length; j++) {
                balance += newDeposits[i].output[j].totalAmount;
            }
        }
    };
    return Wallet;
}());
exports.Wallet = Wallet;
