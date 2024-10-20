
import { Request, Response, NextFunction } from 'express';
import invoices_repository from '../repositories/invoices_repository'   ;

async function getInvoice(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    const result = await invoices_repository.getInvoice(parseInt(id));
    if (result)
        res.json(result);
    else
        res.sendStatus(404);
}


async function getInvoices(req: Request, res: Response, next: NextFunction) {
    const result = await invoices_repository.getInvoices();
    if (result)
        res.json(result);
    else
        res.sendStatus(404);
}



export default {
    getInvoice,
    getInvoices,
}

