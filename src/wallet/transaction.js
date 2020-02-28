"use strict";
exports.__esModule = true;
var util_1 = require("../util");
/**
 * The Transaction class which controls all the outgoing transasctions
 */
var Transaction = /** @class */ (function () {
    function Transaction() {
        this.address = util_1["default"].genID();
        this.to = [];
    }
    return Transaction;
}());
exports.Transaction = Transaction;
