import express from 'express';
const router = express.Router();
import StudentController from '../controllers/StudentController.js';

router.get('/set',StudentController.regen_session);
router.get('/get',StudentController.get_session);
router.get('/delete',StudentController.delete_session);
router.get('/counter',StudentController.counter_session);
router.get('/get-count',StudentController.get_counter);


export default router;