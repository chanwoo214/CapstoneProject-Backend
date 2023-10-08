import { Router } from "express";
let router = Router();
import { userController } from "../controllers"; //index.js

router.get('/users', (req, res) => {
    userController.getUsers(res);
})

router.post('/users', (req, res) => {
    userController.createUser(req.body, res)
})

export default router;