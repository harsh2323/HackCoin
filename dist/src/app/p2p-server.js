"use strict";
var Websocket = require('ws');
// Server Connection
var wss = new Websocket.Server({ port: 3000 });
wss.on('connection', function (ws) {
    // Add the clients
    ws.on('message', function (message) {
        console.log('message %s received', message);
    });
    ws.send('test.json');
});
