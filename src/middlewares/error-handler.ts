import { Request, Response, NextFunction } from 'express';
import CustomError from '../errors/custom-erros';

/**
 * Error handler middleware for catching errors
 * and return appropriate response.
 */
const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {

  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({
      errors: err.serializeErrors()
    });
  }

  // if error is not recognized return 
  // with general message
  console.log(err);
  res.status(400).send({
    errors: [{ message: 'Something went wrong' }]
  });
}

export default errorHandler;
