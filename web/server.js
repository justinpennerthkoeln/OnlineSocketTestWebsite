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
    const filePath = path.join(__dirname, 'templates', 'index.html');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    res.send(fileContent);
});

io.on('connection', (socket) => {
    console.log('A user has connected!');
});

server.listen(3000);
console.log("server running!");