const knex = require("../database/knex");
const { getIo } = require("../socket");
class MessagesController {
    async create (request, response) {
        const { text } = request.body;
        const { id } = request.user;
        const { channel_id } = request.params;

        const io = getIo();

        await knex("messages").insert({
            text,
            user_id: id,
            channel_id
        });

        io.to(`group-${channel_id}`).emit("newMessage", { channel_id });

        return response.status(201).json({
            status: "sucess",
            message: "message created sucessfully"
        });
    }

    async index (request, response) {
        const { channel_id } = request.params;
        const allMessages = await knex("messages").where({ channel_id });

        const io = getIo();

        const allUsers = await knex("users").select("id", "name", "avatar");

        const messages = allMessages.map( message => {
            const [user] = allUsers.filter( user => user.id === message.user_id);

            return({
                ...message,
                name: user.name,
                avatar: user.avatar,
            });
        });

        return response.json({
            messages
        });
    }
}

module.exports = MessagesController;