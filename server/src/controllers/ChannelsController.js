const knex = require("../database/knex");

class ChannelsController {
    async create (request, response) {
        const { name, description } = request.body;
        const { id } = request.user;

        const [channel_id] = await knex("channels").insert({
            name,
            description
        })

        await knex("my_channels").insert({
            user_id: id,
            channel_id
        })

        return response.status(201).json({
            status: "sucess",
            message: "channel created successfully"
        })

    }
}

module.exports = ChannelsController;