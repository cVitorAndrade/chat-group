const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const { hash } = require("bcryptjs");

class UsersController {
    async create (request, response) {
        const { name, email, password } = request.body;
        const user = await knex("users").where({ email }).first();

        if ( user ) {
            throw new AppError("Esse email já está em uso");
        }

        const hashedPassword = await hash(password, 8);

        const [user_id] = await knex("users").insert({
            name,
            email,
            password
        });

        const [channel_id] = await knex("channels").insert({
            name: "Welcome",
            description: "This is the welcome channel, we are happy that you have joined us"
        })

        const addWelcomeToMyChannels = async () => {
            await knex("my_channels").insert({
                user_id,
                channel_id
            });
        }

        const createWelcomeMessage = async () => {
            await knex("messages").insert({
                text: `Hello ${name},

                We're thrilled to have you with us! Your presence is a special addition to our community.
                
                Remember to follow the guidelines to maintain a positive environment for everyone.
                
                Feel at home and enjoy!
                
                Enthusiastically,
                cVitor Andrade`,
                user_id,
                channel_id,
            })
        }

        Promise.all([ addWelcomeToMyChannels(), createWelcomeMessage() ])
        .catch( error => {
            throw new AppError("Erro", 500);
        })

        return response.status(201).json({
            status: "success",
            message: "user created successfully"
        });
    }
}

module.exports = UsersController;