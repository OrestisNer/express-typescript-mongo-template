import { ValidationError } from 'express-validator';
import CustomError from './custom-erros';

export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(public errors: ValidationError[]) {
    super('Invalid Request Parameter');
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    // iterates through validation errors and returns them
    // as an array of object with message and field properties
    return this.errors.map(error => {
      return { message: error.msg, field: error.param }
    });
  }
}
