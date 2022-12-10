import {join} from 'path';
import express from 'express';
import { homeController } from '../controllers/homeController.js';
import { abouteController } from '../controllers/abouteController.js';
const router = express.Router();

router.get("/",homeController );
router.get('/aboute',abouteController)

export default router;