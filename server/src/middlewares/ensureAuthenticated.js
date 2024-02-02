const { verify } = require("jsonwebtoken");
const AppError = require("../utils/AppError");
const authConfig = require("../config/auth");

function ensureAuthenticated (request, response, next) {
    const authHeader = request.headers.authorization;

    if ( !authHeader ) {
        throw new AppError("Token not provided");
    }

    const [token] = authHeader.split(" ")[1];

    try {
        const { sub: user_id } = verify(token, authConfig.jwt.secrets)

        request.user = {
            id: Number(user_id)
        }

        return next();
        
    } catch (error) {
        throw new AppError("Invalid Token");
    }
}

module.exports = ensureAuthenticated;