import { Router } from 'express';
import DonationController from '../controllers/DonationController';

const donationRouter = Router();
const donationController = new DonationController();

donationRouter.post('/', donationController.create);
donationRouter.get('/', donationController.list);
donationRouter.delete('/:id', donationController.delete);

export default donationRouter;
