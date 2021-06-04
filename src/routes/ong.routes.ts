import { Router } from 'express';
import OngController from '../controllers/OngController';
import { OngValidations } from '../validations/OngValidations';
import { authorization } from '../middlewares/authorization';

const ongRouter = Router();
const ongController = new OngController();
const ongValidations = new OngValidations();

ongRouter.post('/', ongValidations.create, ongController.create);
ongRouter.get('/', ongController.list);
ongRouter.post('/session', ongController.login);
ongRouter.post('/filter', ongController.filterByName);

ongRouter.use(authorization);
ongRouter.get('/:id', ongController.getById);
ongRouter.delete('/:id', ongController.delete);
ongRouter.put('/:id', ongController.update);

export default ongRouter;
