import { Request, Response } from 'express';
import DonationService from '../services/DonationService';

const donationService = new DonationService();

export default class DonationController {
  async create(req: Request, res: Response) {
    const donation = await donationService.create(req.body);
    return res.status(201).json(donation);
  }

  async list(req: Request, res: Response) {
    const donations = await donationService.list();
    return res.status(200).json(donations);
  }

  async delete(req: Request, res: Response) {
    await donationService.delete(Number(req.params.id));
    return res.status(200).json('successfully deleted!');
  }
}
