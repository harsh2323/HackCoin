var Websocket = require('ws');
// import { Transaction } from '../wallet/transaction'
var testJson = require('./test.json');
// import { Block } from '../block/block';
// Server Connection
var wss = new Websocket.Server({ port: 3000 });
// const block = new Block('eh','1d345jane4te14',0,0,'Hello this is a test');
// start a new transaction for test
// const transac = new Transaction();
// console.log(transac);
wss.on('connection', function (ws) {
    // Add the clients
    ws.on('message', function (message) {
        console.log('message %s received', message);
    });
    ws.send('test.json');
});
