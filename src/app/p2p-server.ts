const Websocket = require('ws');

// Server Connection
const wss = new Websocket.Server({ port: 3000 });
wss.on('connection', function (ws: any) {
    // Add the clients
    ws.on('message', function (message: string) {
      console.log('message %s received', message);  
    });


    ws.send('helli');
})

// Client Connection
const clientConnection = new Websocket('http://localhost:3000');

clientConnection.on('connection', function(c:any) {
    clientConnection.send('Client message');

});

clientConnection.onerror = (error: Error) => {
    console.log(`WebSocket error: ${error}`)4
  }
  
clientConnection.onmessage = (e: any) => {
    console.log(e.data)
  }