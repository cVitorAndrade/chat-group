const { Router } = require("express");

const router = Router();

const sessionsRoutes = require("./sessions.routes");
const usersRoutes = require("./users.routes");
const channelsRoutes = require("./channels.routes");
const myChannelsRoutes = require("./mychannels.routes");
const messagesRoutes = require("./messages.routes");

router.use("/sessions", sessionsRoutes);
router.use("/users", usersRoutes);
router.use("/channels", channelsRoutes);
router.use("/my_channels", myChannelsRoutes);
router.use("/messages", messagesRoutes);

module.exports = router;