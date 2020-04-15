import express from 'express';
import userController from '../controllers/userController';

const router = express.Router();

router.get("/", userController.findAll);

router.post("/", userController.create);


export default router;
