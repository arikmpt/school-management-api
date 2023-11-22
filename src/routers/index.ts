import express, { Response } from 'express';
import cors from 'cors';

const router = express.Router();
const app = express();

router.get('/', (_, res: Response) =>
    res.json({
        message: 'Application Up!',
    })
);

app.use(cors());
app.use('/api', router);
app.use('*', (_, res: Response) =>
    res.json({
        message: 'Route not found',
    })
);

export default app;
