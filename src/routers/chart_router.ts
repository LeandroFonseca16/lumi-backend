import express from 'express';
import chart_controller from '../controllers/chart_controller';

const router = express.Router();

router.get('/:customerId', chart_controller.getChart);
export default router;
