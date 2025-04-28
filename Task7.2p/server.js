const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');

const PORT = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  setInterval(() => {
    const randomNumber = parseInt(Math.random() * 10);
    socket.emit('number', randomNumber);
  }, 1000);
});

http.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
