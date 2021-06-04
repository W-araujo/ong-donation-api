import AppError from '../errors/Errors';
import { Request, Response, NextFunction } from 'express';

function error(err: Error, req: Request, res: Response, _: NextFunction) {
  if (err instanceof AppError) {
    console.log(err);
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
}

export { error };
