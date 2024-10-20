
import { Request, Response, NextFunction } from 'express';
import customer_entity from '../entities/customer_entity';
import customer_repository from '../repositories/customer_repository'   ;

async function getCustomer(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    const customer = await customer_repository.getCustomer(parseInt(id));
    if (customer)
        res.json(customer);
    else
        res.sendStatus(404);
}

async function getCustomers(req: Request, res: Response, next: NextFunction) {
    const customers = await customer_repository.getCustomers();
    res.json(customers);
}


async function postCustomer(req: Request, res: Response, next: NextFunction) {
    const customer = req.body as customer_entity;
    const result = await customer_repository.addCustomer(customer);
    if (result)
        res.status(201).json(result);
    else
        res.sendStatus(400);
}

async function patchCustomer(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    const customer = req.body as customer_entity;
    const result = await customer_repository.updateCustomer(parseInt(id), customer);
    if (result)
        res.json(result);
    else
        res.sendStatus(404);
}

async function deleteCustomer(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    const success = await customer_repository.deleteCustomer(parseInt(id));
    if (success)
        res.sendStatus(204);
    else
        res.sendStatus(404);
}

export default {
    getCustomer,
    getCustomers,
    postCustomer,
    patchCustomer,
    deleteCustomer
}

