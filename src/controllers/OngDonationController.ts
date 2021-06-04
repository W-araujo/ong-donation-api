import { Request, Response } from 'express';
import OngDonationService from '../services/OngDonationService';

const ongDonationService = new OngDonationService();

export default class OngDonationController {
  async create(req: Request, res: Response) {
    const ongDonation = await ongDonationService.create(
      Number(req.params.ongId),
      req.body,
    );
    return res.status(201).json(ongDonation);
  }

  async list(req: Request, res: Response) {
    const ongDonations = await ongDonationService.list();
    return res.status(200).json(ongDonations);
  }
}
