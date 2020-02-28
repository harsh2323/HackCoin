var ws = require('ws');
var testJson = require('./test.json');
// Client Connection
var clientConnection = new ws('http://localhost:3000');
clientConnection.on('connection', function (c) {
    clientConnection.send('connection dobe lol');
});
clientConnection.on('message', function (e) {
    clientConnection.send(JSON.stringify(testJson));
});
clientConnection.onerror = function (error) {
    console.log("WebSocket error: " + error);
};
clientConnection.onmessage = function (e) {
    console.log(e.data);
};
