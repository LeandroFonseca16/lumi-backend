
import { Request, Response, NextFunction } from 'express';
import chart_repository from '../repositories/chart_repository'   ;

async function getChart(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    const result = await chart_repository.getChart();
    if (result)
        res.json(result);
    else
        res.sendStatus(404);
}


export default {
    getChart,
}

