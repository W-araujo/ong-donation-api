import { Request, Response, NextFunction } from 'express';
import AppError from '../errors/Errors';
import * as yup from 'yup';

class TypeValidations {
  async create(req: Request, res: Response, next: NextFunction) {
    const schema = yup.object().shape({
      name: yup.string().required(),
    });

    try {
      await schema.validate(req.body, { abortEarly: false });
    } catch (error) {
      throw new AppError(error);
    }

    return next();
  }
}

export { TypeValidations };
