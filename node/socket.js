// 简单可用的websocket服务代码
// client /Users/lokalone/code/tech/protojs/utils/socket.js 
var WebSocketServer = require('websocket').server;
var http = require('http');
const util = require('util')

var server = http.createServer(function(request, response) {
  // process HTTP request. Since we're writing just WebSockets
  // server we don't have to implement anything.
});
server.listen(7003, function() { });

// create the server
wsServer = new WebSocketServer({
  httpServer: server
});

// WebSocket server
wsServer.on('request', function(request) {
  var connection = request.accept(null, request.origin);
  // This is the most important callback for us, we'll handle
  // all messages from users here.
  connection.on('message', function(message) {
    console.log('Message', message);
    connection.send('server hello');
  });
  
  connection.on('close', function(connection) {
  
  });
});