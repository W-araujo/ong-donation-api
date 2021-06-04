import { Request, Response, NextFunction } from 'express';
import AppError from '../errors/Errors';
import * as yup from 'yup';

class OngValidations {
  async create(req: Request, res: Response, next: NextFunction) {
    const schema = yup.object().shape({
      name: yup.string().required(),
      description: yup.string(),
      typeId: yup.number(),
      phone: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().min(6).required(),
      role: yup.string(),
    });

    try {
      await schema.validate(req.body, { abortEarly: false });
    } catch (error) {
      throw new AppError(error);
    }

    return next();
  }
}

export { OngValidations };
