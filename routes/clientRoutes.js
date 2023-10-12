/**
 * @swagger
 * components:
 *   schemas:
 *     Clients:
 *       type: object
 *       required:
 *         - clientName
 *         - bank
 *         - productName
 *         - term 
 *         - rate
 *         - refixDate
 *         - amount
 *         - isDeleted
 *         - description
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the client
 *         clientName:
 *           type: string
 *           description: The name of the client
 *         bank:
 *           type: string
 *           description: The name of the bank 
 *         productName:
 *           type: string
 *           description: The name of the loan product
 *         term:
 *           type: number
 *           description: Period of the loan
 *         rate:
 *           type: number
 *           description: Interest rate that has been charged to the loan
 *         refixDate:
 *           type: string
 *           description: Date when the client needs to refix their loan
 *         amount:
 *           type: number
 *           description: Amount of the loan 
 *         description:
 *           type: string
 *           description: Anything that needs to be followed up
 *         timestamps:
 *           type: string
 *           format: date
 *           description: The date the client was added
 *     
 */
/**
 * @swagger
 * tags:
 *   name: Clients
 *   description: The client managing API
 * /clients:
 *   get:
 *     summary: Lists all the clients
 *     tags: [Clients]
 *     responses:
 *       200:
 *         description: The list of the clients
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Clients'
 *      400:
 *         description: Some error
 *   post:
 *     summary: Create a new client
 *     tags: [Clients]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Clients'
 *     responses:
 *       200:
 *         description: Created a new client.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Clients'
 *       400:
 *         description: Some error
 * /clients/{id}:
 *   put:
 *     summary: Update changes in the client information
 *     tags: [Clients]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The client id
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Clients'
 *     responses:
 *       200:
 *         description: The of updated client information
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Clients'
 *       400:
 *         description: The client was not found
 *   delete:
 *     summary: Remove the client by id
 *     tags: [Clients]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The client id
 *
 *     responses:
 *       200:
 *         description: The client is deleted
 *       400:
 *         description: The client was not found
 */


const express = require("express");
const router = express.Router()
const clientController = require("../controllers/clientController");

router.post("/", clientController.createClient);
router.get("/", clientController.getClients);
router.put("/:id", clientController.updateClient);
router.delete("/:id", clientController.deleteClient);
module.exports = router;