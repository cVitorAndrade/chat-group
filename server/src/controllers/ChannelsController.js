const knex = require("../database/knex");

class ChannelsController {
    async create (request, response) {
        const { name, description } = request.body;
        const { user_id } = request.params;

        const [channel_id] = await knex("channels").insert({
            name,
            description
        })

        await knex("my_channels").insert({
            user_id,
            channel_id
        })

        return response.status(201).json({
            status: "sucess",
            message: "channel created successfully"
        })

    }
}

module.exports = ChannelsController;