import express from 'express';
import { getfinancesummary, createfinancesummary } from '../controllers/financesummaryController.js';
const router = express.Router();

router.get('/', getfinancesummary);
router.post('/', createfinancesummary);

export default router;
