const { Router } = require("express");

const router = Router();

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const sessionsRoutes = require("./sessions.routes");
const usersRoutes = require("./users.routes");
const channelsRoutes = require("./channels.routes");
const myChannelsRoutes = require("./mychannels.routes");
const messagesRoutes = require("./messages.routes");

router.use("/sessions", sessionsRoutes);
router.use("/users", usersRoutes);
router.use("/channels", ensureAuthenticated, channelsRoutes);
router.use("/my_channels", ensureAuthenticated, myChannelsRoutes);
router.use("/messages", ensureAuthenticated, messagesRoutes);

module.exports = router;