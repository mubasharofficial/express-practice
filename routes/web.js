import express from 'express';
const router = express.Router();
import StudentController from '../controllers/StudentController.js';

router.get('/set',StudentController.set_cookies);
router.get('/get',StudentController.get_cookies);
router.get('/delete',StudentController.delete_cookies);

export default router;