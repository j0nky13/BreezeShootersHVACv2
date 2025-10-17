import express from 'express';
import { getUser, createUser } from '../controllers/userController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/user/:id', auth, getUser);
router.post('/user', createUser);

export default router;
