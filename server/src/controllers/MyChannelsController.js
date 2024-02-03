const knex = require("../database/knex");

class MyChannelsController {
    async index (request, response) {
        const { id } = request.user;

        const myChannels = await knex("my_channels").where({ user_id: id });
        const allChannels = await knex("channels");

        const channels = allChannels.filter( channel => {
            const [userChannel] = myChannels.filter( myChannel => myChannel.channel_id === channel.id );
            return userChannel;
        })

        return response.json({
            channels,
        })
    }

    async show (request, response) {
        const { channel_id } = request.params;

        const myChannel = await knex("channels").where({ id: channel_id }).first();
        const allMyChannels = await knex("my_channels");
        const allUsers= await knex("users");

        const membersInChannel = allUsers
        .filter( user => {
            const [channelMember] = allMyChannels.filter(myChannelInfo => myChannelInfo.user_id === user.id && myChannelInfo.id === myChannel.id);
            return channelMember
        })
        .map( member => ({
            id: member.id,
            name: member.name,
            email: member.email,
            avatar: member.avatar

        }));

        response.json({
            ...myChannel,
            members: membersInChannel
        })

    }
}

module.exports = MyChannelsController;