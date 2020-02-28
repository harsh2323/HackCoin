const Websocket = require('ws');

// Server Connection
const wss = new Websocket.Server({ port: 3000 });


wss.on('connection', function (ws: any) {
    // Add the clients
    ws.on('message', function(message: JSON) {
      console.log('message %s received', message);  
    });


    ws.send('test.json');
})

