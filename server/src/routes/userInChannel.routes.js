const { Router } = require("express");

const userInChannelRoutes = Router();

const UserInChannelController = require("../controllers/UserInChannelController");
const userInChannelController = new UserInChannelController();

userInChannelRoutes.post("/:channel_id", userInChannelController.add);

module.exports = userInChannelRoutes;