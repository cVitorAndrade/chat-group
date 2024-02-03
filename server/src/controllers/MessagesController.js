const knex = require("../database/knex");

class MessagesController {
    async create (request, response) {
        const { text } = request.body;
        const { id } = request.user;
        const { channel_id } = request.params;

        await knex("messages").insert({
            text,
            user_id: id,
            channel_id
        });

        return response.status(201).json({
            status: "sucess",
            message: "message created sucessfully"
        });
    }

    async index (request, response) {
        const { channel_id } = request.params;
        const allMessages = await knex("messages").where({ channel_id });

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