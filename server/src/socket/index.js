const socketIo = require("socket.io");
const knex = require("../database/knex");

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


        socket.on("setID", async ({ id }) => {
            socket.leaveAll();
            const myChannels = await knex("my_channels").where({ user_id: id });
            const allChannels = await knex("channels");

            const channels = allChannels.filter( channel => {
                const [userChannel] = myChannels.filter( myChannel => myChannel.channel_id === channel.id );
                return userChannel;
            })
            .map( channel => ({ id: channel.id }));
            
            channels.forEach( channel => {
                socket.join(`group-${channel.id}`);
            });
        });

    });

    
}

function getIo () {
    if ( !io ) {
        throw new Error("Socket.io not initialized");
    }

    return io;
}

async function subscribeInChannel () {

}

module.exports = {
    initializeSocket,
    getIo
}