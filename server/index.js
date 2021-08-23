const express = require("express");

const http = require("http");
const router = require("./router");
const cors = require('cors');

const PORT = process.env.PORT || 5000;


const app = express();
const server = http.createServer(app);

const io = require('socket.io')(server, {
   cors: {
      origin: "http://localhost:3000",
      credentials: true
   }
});

app.use(router);
app.use(cors());


io.on("connection", (socket) => {
   console.log("we have a new connection");

   socket.on("join", ({name, room}) => {
      console.log(name, room);
   })

   socket.on("disconnect", () => {
      console.log("user had left");
   })
})


server.listen(PORT, () => console.log("Server has started succesfully"))