const ws = require('ws');

const testJson = require('./test.json');

// Client Connection
const clientConnection = new ws('http://localhost:3000');

clientConnection.on('connection', function(c:any) {
    clientConnection.send('connection dobe lol');

});

clientConnection.on('message',function(e:any) {
    clientConnection.send(JSON.stringify(testJson));
})

clientConnection.onerror = (error: Error) => {
    console.log(`WebSocket error: ${error}`);
  }
  
clientConnection.onmessage = (e: any) => {
    console.log(e.data)
  }