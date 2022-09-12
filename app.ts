import express, { Request, Response } from 'express';
import apiCache from 'apicache';
import cors from 'cors';

import { routes } from './routes';

const app = express();
const cache = apiCache.middleware;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cache('20 minutes'));

app.use('/api/v1/', routes);

app.use('/', (req: Request, res: Response) => {
  return res.send('Welcome to our site!');
});

export { app };
