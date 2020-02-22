"use strict";
exports.__esModule = true;
var config = require("../config");
var Wallet = /** @class */ (function () {
    function Wallet() {
        this.privateKey = config.INITIAL_WALLET_BALANCE;
        this.publicKey = publicKey;
        this.totalAmount = totalAmount;
    }
    return Wallet;
}());
exports.Wallet = Wallet;
