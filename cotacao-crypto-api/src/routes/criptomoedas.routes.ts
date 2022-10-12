import { Router } from 'express';
import { CriptomoedaController } from '../controllers/CriptomoedaController';

const criptomoedasRouter = Router();

const criptomoedaController = new CriptomoedaController();

criptomoedasRouter.get('/', criptomoedaController.show);
criptomoedasRouter.post('/', criptomoedaController.create);

export default criptomoedasRouter;


