const { Router } = require("express");

const router = Router();

const usersRoutes = require("./users.routes");
const channelsRoutes = require("./channels.routes");
const myChannelsRoutes = require("./mychannels.routes");

router.use("/users", usersRoutes);
router.use("/channels", channelsRoutes);
router.use("/my_channels", myChannelsRoutes);

module.exports = router;