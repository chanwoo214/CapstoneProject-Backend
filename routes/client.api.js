import express from 'express';
const router = express.Router()

router.post("/",authController.checkAdminPermission,clientController.createClient);


export default router;