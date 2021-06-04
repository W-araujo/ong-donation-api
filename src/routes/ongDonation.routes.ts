import { Router } from 'express';
import OngDonationController from '../controllers/OngDonationController';

const ongDonationRouter = Router();
const ongDonationController = new OngDonationController();

ongDonationRouter.post('/:ongId', ongDonationController.create);
ongDonationRouter.get('/', ongDonationController.list);

export default ongDonationRouter;
