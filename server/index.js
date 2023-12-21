const express = require("express");
const bodyparser = require("body-parser");
const {Server} = require("socket.io");

const io = new Server({
    cors: true
});
const app = express();

app.use(bodyparser.json());

const emailToSocketMapping = new Map();

io.on("connection", (socket) => {
    console.log("new socket", socket.id)
    socket.on("join-room", (data)=>{
        const { roomId, emailId } = data;
        console.log("User ", emailId, "Joined Room ", roomId);
        emailToSocketMapping.set(emailId,socket.id);
        socket.emit("joined-room", { roomId })
        socket.join(roomId);
        socket.broadcast.to(roomId).emit("user-joined", { emailId });
    })
})

app.listen(8000,()=>{
    console.log("Http server is running at 8000");
})

io.listen(8001,()=>{
    console.log("socket listening at 8001");
})