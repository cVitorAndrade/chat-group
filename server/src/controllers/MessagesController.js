const knex = require("../database/knex");

class MessagesController {
    async index (request, response) {
        const { channel_id } = request.params;
        const messages = await knex("messages").where({ channel_id });

        return response.json({
            messages
        });
    }
}

module.exports = MessagesController;