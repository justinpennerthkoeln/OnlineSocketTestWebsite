var http = require('http');
var express = require('express');
var socketIo = require('socket.io');
var fs = require('fs');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new socketIo.Server(server, {
    
});


app.get("/", (req, res) => {
    const filePath = path.join(__dirname, 'index.html');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    res.send(fileContent);
});

io.on('connection', (socket) => {
    console.log('A user has connected: ' + socket.id);

    socket.on('button-pressed', () => {
        io.to(socket.id).emit('button-pressed');
    });

    socket.on('disconnect', () => {
        console.log('A user dissconnected: ' + socket.id)
    });
});

server.listen(3000);
console.log("Server running!");