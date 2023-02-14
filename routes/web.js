import express from 'express';
const router = express.Router();
import StudentController from '../controllers/StudentController';

router.get('/setcookie',StudentController.set_cookies);
router.get('/getcookie',StudentController.get_cookies);
router.get('/deletecookie',StudentController.delete_cookies);

export default router;