const { Router } = require("express");

const channelsRoutes = Router();

const ChannelsController = require("../controllers/ChannelsController");
const channelsController = new ChannelsController();

channelsRoutes.post("/:user_id", channelsController.create);

module.exports = channelsRoutes;