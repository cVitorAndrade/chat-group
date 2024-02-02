const { compare } = require("bcryptjs");
const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const { sign } = require("jsonwebtoken");
const authConfig = require("../config/auth");

class SessionsController {
    async create (request, response) {
        const { email, password } = request.body;
        const user = await knex("users").where({ email }).first();

        if ( !user ) {
            throw new AppError("Invalid email or password");
        }

        const passwordMatched = await compare(password, user.password);
        if ( !passwordMatched ) {
            throw new AppError("Invalid email or password");
        }

        const { expiresIn, secrets } = authConfig.jwt;

        const token = sign({}, secrets, {
            expiresIn,
            subject: String(user.id)
        });

        return response.json({ token, user })
    }
}

module.exports = SessionsController;