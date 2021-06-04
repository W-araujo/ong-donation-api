import { Request, Response } from 'express';
import OngService from '../services/OngService';

const ongService = new OngService();

export default class OngController {
  async create(req: Request, res: Response) {
    const ong = await ongService.create(req.body);
    return res.status(201).json(ong);
  }

  async list(req: Request, res: Response) {
    const ongs = await ongService.list();
    return res.status(200).json(ongs);
  }

  async filterByName(req: Request, res: Response) {
    const ongs = await ongService.filterByName(req.body.name);
    return res.status(200).json(ongs);
  }

  async login(req: Request, res: Response) {
    const user = await ongService.login(req.body);
    return res.status(200).json(user);
  }

  async getById(req: Request, res: Response) {
    const ong = await ongService.getById(Number(req.params.id));
    return res.status(200).json(ong);
  }

  async delete(req: Request, res: Response) {
    await ongService.delete(Number(req.params.id));
    return res.status(200).json('successfully deleted!');
  }

  async update(req: Request, res: Response) {
    const ongUpdate = await ongService.Update(Number(req.params.id), req.body);
    return res.status(200).json(ongUpdate);
  }
}
