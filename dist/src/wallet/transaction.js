"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __importDefault(require("../util"));
/**
 * The Transaction bloc which controls all the outgoing transasctions
 */
function getNewTransactions(address, senderBalance, senderAmount, receiverBalance, senderPublicKey) {
    // if the amount the sender sends exceeds the amount in their balance then throw an error
    if (senderAmount > senderBalance) {
        throw new RangeError('You dont have a sufficient balance to send this amount');
    }
    //otherwise.. 
    return {
        address: util_1.default.genID(),
        input: {
            senderAddress: senderPublicKey,
            senderBalance: senderBalance,
            amount: senderAmount,
        },
        output: {
            receiverAddress: address,
            receiverBalance: receiverBalance
        }
    };
}
exports.getNewTransactions = getNewTransactions;
