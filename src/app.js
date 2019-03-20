const express = require("express");
const path = require("path");
const http = require("http");
const app = express();
const socketio = require("socket.io");

const port = process.env.PORT || 3000;
const publicDirectory = path.join(__dirname, "../public");
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(publicDirectory));

io.on("connection", socket => {
  console.log("New WebSocket Connection");
  socket.broadcast.emit("message", "New User Joined");

  socket.on("sendMessage", message => {
    io.emit("message", message);
  });
});

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
