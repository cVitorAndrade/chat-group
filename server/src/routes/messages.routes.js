const { Router } = require("express");

const messagesRoutes = Router();

const MessagesController = require("../controllers/MessagesController");
const messagesController = new MessagesController();

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
messagesRoutes.use(ensureAuthenticated);

messagesRoutes.get("/:channel_id", messagesController.index);
messagesRoutes.post("/:channel_id", messagesController.create);

module.exports = messagesRoutes;