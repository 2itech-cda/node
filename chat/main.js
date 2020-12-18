const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const morgan = require('morgan');

const app = express();
const server = http.Server(app);
const io = socketio(server);

const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || 'localhost';

app.use(express.static('statics'));
app.use(morgan('dev'));

io.on('connection', socket => {
    console.log('Connection', socket.id);

    socket.on('hello', (message) => {
        console.log(message);
    }) 

    socket.emit('welcome', 'Bonjour, tu es le bienvenu');
})

server.listen(PORT, HOST, () =>  console.log('Server is running...'));