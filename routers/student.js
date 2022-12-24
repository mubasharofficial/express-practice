import express from 'express';
import { studentController } from '../controllers/studentController.js';
import { myLogger } from '../middleware/logger-middleware.js';
const router = express.Router();
{studentController}
/** this will apply to all these routes file */
router.use(myLogger)
router.get('/student',myLogger,studentController);
export default router;