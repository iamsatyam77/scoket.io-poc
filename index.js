const express = require("express");
const path = require("path");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

require("./socket-server")(io);

app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.sendFile("index.html");
});

http.listen(3000, () => {
  console.log("listening on *:3000");
});
