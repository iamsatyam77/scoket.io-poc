const socket = io();

socket.on("connect", function () {
  console.log("Socket connected with server", socket.id);

  socket.emit("test");
});
