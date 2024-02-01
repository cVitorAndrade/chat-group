const { Router } = require("express");

const messagesRoutes = Router();

const MessagesController = require("../controllers/MessagesController");
const messagesController = new MessagesController()

messagesRoutes.get("/:channel_id", messagesController.index);

module.exports = messagesRoutes;