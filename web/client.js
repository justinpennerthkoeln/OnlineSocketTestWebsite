const socket = io();

document.getElementById('button').addEventListener('click', () => {
  socket.emit('button-clicked');
});

socket.on('message', (msg) => {
  console.log('Received message: ', msg);
});