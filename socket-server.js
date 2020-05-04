module.exports = function (io) {
  io.on("connection", (socket) => {
    console.log("User connected with socket id:", socket.id);

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });

    socket.on("test", function () {
      console.log("Hello from client");
    });
  });
};
