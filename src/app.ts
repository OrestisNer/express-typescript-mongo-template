/**
 * Make this a seperate file in order to 
 * load in supertest without listering on
 * specific port
 */
import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.all('*', async (req: Request, res: Response) => {
  res.status(404).send({
    message: 'Not Found'
  });
});

export { app };