/**
 * Make this a seperate file in order to 
 * load in supertest without listering on
 * specific port
 */
import express from 'express';
import helmet from 'helmet';
import NotFoundError from './errors/not-found-error';
import errorHandler from './middlewares/error-handler';
import 'express-async-errors';

const app = express();

app.set('trust proxy', true);
app.use(express.json());
app.use(helmet());

app.all('*', async () => { throw new NotFoundError(); });

app.use(errorHandler);

export { app };