const { Router } = require("express");

const router = Router();

const usersRoutes = require("./users.routes");
const channelsRoutes = require("./channels.routes");

router.use("/users", usersRoutes);
router.use("/channels", channelsRoutes);

module.exports = router;