// Create WebSocket connection.
// server /Users/lokalone/code/tech/protojs/node/socket.js
const socket = new WebSocket('ws://127.0.0.1:7003');
// var socket = new WebSocket("ws://www.example.com/socketserver", "protocolOne");

let btn = document.getElementById('send');
// Connection opened
socket.addEventListener('open', function (event) {
    console.log('connected');
    socket.send('Hello Server!');
});

btn.onclick = () => {
    console.log('send message');
    socket.send('hello server');
}

// Listen for messages
socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});