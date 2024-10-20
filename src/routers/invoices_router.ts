import express from 'express';
import invoices_controller from '../controllers/invoices_controller';

const router = express.Router();

router.get('/:id', invoices_controller.getInvoice);

router.get('/', invoices_controller.getInvoices);

export default router;
