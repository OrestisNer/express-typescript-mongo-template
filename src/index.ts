import express, { Request, Response } from 'express';
import { app } from './app';
import { connectDB } from './config/db';

const start = async () => {
  const port = process.env.POST || 9876;

  await connectDB();

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}

start();