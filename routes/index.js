const express = require ("express");
const router = express.Router();
const clientApi = require ("./client.api");
const taskApi = require ("./task.api");

router.use("/user"/clientApi);
router.use("/tasks", taskApi);

module.exports = router;