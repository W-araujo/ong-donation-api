import { Router } from 'express';
import ongRouter from './ong.routes';
import typeRouter from './type.routes';
import donationRouter from './donation.routes';
import ongDonationRouter from './ongDonation.routes';

const routes = Router();

routes.use('/ong', ongRouter);
routes.use('/type', typeRouter);
routes.use('/donation', donationRouter);
routes.use('/ongdonation', ongDonationRouter);

export default routes;
