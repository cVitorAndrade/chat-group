const socketIo = require("socket.io");
const AppError = require("../utils/AppError");

let io;

function initializeSocket (server) {
    io = socketIo(server, {
        cors: {
            origin: "http://localhost:5173",
            methods: ["GET", "POST"]
        }
    });

    io.on("connect", (socket) => {
        console.log("User connected");
    });

}

function getIo () {
    if ( !io ) {
        throw new Error("Socket.io not initialized");
    }

    return io;
}

module.exports = {
    initializeSocket,
    getIo
}