import express, { Application } from 'express';
import bodyParser from 'body-parser';
import router from '@routers';

const app: Application = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(3000, () => console.log('App listen at port 3000'));
