import express from 'express';
import { getsimpleupload, createsimpleupload } from '../controllers/simpleuploadController.js';
const router = express.Router();

router.get('/', getsimpleupload);
router.post('/', createsimpleupload);

export default router;
