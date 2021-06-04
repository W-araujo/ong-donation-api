import { Router } from 'express';
import TypeController from '../controllers/TypeController';
import { TypeValidations } from '../validations/TypeValidations';
import { authorization } from '../middlewares/authorization';

const typeRouter = Router();
const typeController = new TypeController();
const typeValidations = new TypeValidations();

typeRouter.post('/', typeValidations.create, typeController.create);
typeRouter.use(authorization);
typeRouter.get('/', typeController.list);
typeRouter.delete('/:id', typeController.delete);

export default typeRouter;
