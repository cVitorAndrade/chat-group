const knex = require("../database/knex");

class MyChannelsController {
    async index (request, response) {
        const { user_id } = request.params;

        const myChannels = await knex("my_channels").where({ user_id });
        const allChannels = await knex("channels");

        const channels = allChannels.filter( channel => {
            const [user_channel] = myChannels.filter( myChannel => myChannel.channel_id === channel.id );
            return user_channel;
        })

        response.json({
            channels,
        })

    }
}

module.exports = MyChannelsController;