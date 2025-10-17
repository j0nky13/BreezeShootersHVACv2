import express from 'express';
import { getUser, createUser } from '../controllers/userController.js';
import auth from '../middleware/auth.js';
import financesummaryRouter from './financesummary.js';
import simpleuploadRouter from './simpleupload.js';

const router = express.Router();
router.use('/financesummary', financesummaryRouter);
router.use('/simpleupload', simpleuploadRouter);

router.get('/user/:id', auth, getUser);
router.post('/user', createUser);

export default router;
