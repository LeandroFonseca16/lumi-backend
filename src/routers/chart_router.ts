import express from 'express';
import chart_controller from '../controllers/chart_controller';

const router = express.Router();

router.get('/', chart_controller.getChart);
export default router;
