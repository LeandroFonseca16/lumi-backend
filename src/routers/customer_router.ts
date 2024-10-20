import express from 'express';
import customer_controller from '../controllers/customer_controller';

const router = express.Router();

router.get('/:id', customer_controller.getCustomer);

router.get('/', customer_controller.getCustomers);

router.post('/', customer_controller.postCustomer);

router.patch('/:id', customer_controller.patchCustomer);

router.delete('/:id', customer_controller.deleteCustomer);

export default router;
