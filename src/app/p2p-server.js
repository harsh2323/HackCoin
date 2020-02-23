var Websocket = require('ws');
var wss = new Websocket.Server({ port: 3000 });
wss.on('connection', function (ws) {
    // Add the clients
    ws.on('message', function (message) {
        console.log('message %s received', message);
    });
    ws.send('helli');
});
var clientConnection = new Websocket('http://localhost:3000');
clientConnection.on('connection', function (c) {
    clientConnection.send('Client message');
});
clientConnection.onerror = function (error) {
    console.log("WebSocket error: " + error);
};
clientConnection.onmessage = function (e) {
    console.log(e.data);
};
