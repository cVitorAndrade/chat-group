const { Router } = require("express");

const myChannelsRoutes = Router();

const MyChannelsController = require("../controllers/MyChannelsController");
const myChannelsController = new MyChannelsController()

myChannelsRoutes.get("/:user_id", myChannelsController.index);
myChannelsRoutes.get("/", myChannelsController.show);

module.exports = myChannelsRoutes;