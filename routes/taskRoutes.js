/**
 * @swagger
 * components:
 *   schemas:
 *     Tasks:
 *       type: object
 *       required:
 *         - task
 *         - isComplete
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the task
 *         task:
 *           type: string
 *           description: The task that needs to be done
 *         isComplete:
 *           type: boolean
 *           description: Has the task been completed 
 *         timestamps:
 *           type: string
 *           format: date
 *           description: The date the task was added
 *     
 */
/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: The task managing API
 * /tasks:
 *   get:
 *     summary: Lists all the added tasks
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: The list of the tasks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tasks'
 *       400:
 *         description: Some error
 *   post:
 *     summary: Create a task
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tasks'
 *     responses:
 *       200:
 *         description: Created a new Task.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tasks'
 *       400:
 *         description: Some error
 * /tasks/{id}:
 *   put:
 *     summary: Update changes in the task board
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The task id
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Tasks'
 *     responses:
 *       200:
 *         description: The of updated task board
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tasks'
 *       400:
 *         description: The task was not found
 *   delete:
 *     summary: Remove the task by id
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The task id
 *
 *     responses:
 *       200:
 *         description: The task is deleted
 *       400:
 *         description: The task was not found
 */


const express = require("express");
const taskController = require("../controllers/taskController");
const router = express.Router();

router.get("/", taskController.getTasks);

router.post("/", taskController.createTask);

router.put("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);

module.exports = router;