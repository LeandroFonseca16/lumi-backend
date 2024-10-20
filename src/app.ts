import 'express-async-errors';
import express, {Request, Response, NextFunction} from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import customer_router from './routers/customer_router';
import chart_router from './routers/chart_router';


const app = express();

app.use('/customers/', customer_router);
app.use('/chart/', chart_router);

app.use(morgan('tiny'));

app.use(cors());

app.use(helmet());

app.use(express.json());


app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send(error.message);
})

export default app;