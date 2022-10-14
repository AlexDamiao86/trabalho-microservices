import { Router } from 'express';
import { CriptomoedaController } from '../controllers/CriptomoedaController';

const criptomoedasRouter = Router();

const criptomoedaController = new CriptomoedaController();

criptomoedasRouter.get('/', criptomoedaController.show);
criptomoedasRouter.get('/:codigo', criptomoedaController.find);
criptomoedasRouter.post('/', criptomoedaController.create);

export default criptomoedasRouter;

