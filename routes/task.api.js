const express = require("express");
const taskController = require("../controllers/task.controller");
const router = express.Router();

router.get("/", taskController.getTasks);

router.post("/", taskController.createTask);

router.put("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);
console.log("hehe");
module.exports = router;
