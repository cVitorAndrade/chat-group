const { Router } = require("express");

const channelsRoutes = Router();

const ChannelsController = require("../controllers/ChannelsController");
const channelsController = new ChannelsController();

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

channelsRoutes.use(ensureAuthenticated);

channelsRoutes.post("/", channelsController.create);

module.exports = channelsRoutes;