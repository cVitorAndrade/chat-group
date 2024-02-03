const { Router } = require("express");

const myChannelsRoutes = Router();

const MyChannelsController = require("../controllers/MyChannelsController");
const myChannelsController = new MyChannelsController();

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
myChannelsRoutes.use(ensureAuthenticated);

myChannelsRoutes.get("/", myChannelsController.index);
myChannelsRoutes.get("/:channel_id", myChannelsController.show);

module.exports = myChannelsRoutes;