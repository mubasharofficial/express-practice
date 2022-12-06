import express from 'express';
import {all_student,delete_student} from '../controllers/studentController.js'
const router = express.Router();
router.get('/all',all_student);
router.get('/delete/:id([0-9]{2})',delete_student); // require 2 figure number id like '23,42,52'

export default router;