import { Request, Response } from 'express';
import TypeService from '../services/TypeService';

const typeService = new TypeService();

export default class TypeController {
  async create(req: Request, res: Response) {
    const type = await typeService.create(req.body);
    return res.status(201).json(type);
  }

  async list(req: Request, res: Response) {
    const types = await typeService.list();
    return res.status(200).json(types);
  }

  async delete(req: Request, res: Response) {
    await typeService.delete(Number(req.params.id));
    return res.status(200).json('successfully deleted!');
  }
}
