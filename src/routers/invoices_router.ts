import express from 'express';
import invoices_controller from '../controllers/invoices_controller';

const router = express.Router();

router.get('/:id', invoices_controller.getInvoices);

router.get('/', invoices_controller.getInvoice);

export default router;
