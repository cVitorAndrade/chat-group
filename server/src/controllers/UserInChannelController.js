const knex = require("../database/knex");
const AppError = require("../utils/AppError");


class UserInChannelController {
    async add (request, response) {
        const { email } = request.body;
        const { channel_id } = request.params;
        const user = await knex("users").where({ email }).first();

        if ( !user ) {
            throw new AppError("User not found");
        }

        await knex("my_channels").insert({
            channel_id,
            user_id: user.id
        });

        return response.json({
            status: "sucess",
            message: "user added successfully",
            user_id: user.id
        });
    }
}

module.exports = UserInChannelController;