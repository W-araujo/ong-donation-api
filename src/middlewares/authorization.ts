import { Request, Response, NextFunction } from 'express';
import { decode } from '../utils/jwt';

import AppError from '../errors/Errors';

function authorization(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token not found!');
  }
  const [, token] = authHeader.split(' ');

  try {
    const decoded = decode(token);

    next();
    return decoded;
  } catch (error) {
    console.log(error);
    return res.status(403).json({ message: 'Invalid token' });
  }
}

export { authorization };
