// Create WebSocket connection.
const socket = new WebSocket('ws://localhost:7003');

// Connection opened
socket.addEventListener('open', function (event) {
    socket.send('Hello Server!');

    setTimeout(() => {
        console.log('ddd');
        socket.send('Hello Server');
    }, 2000);
});


// Listen for messages
socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});