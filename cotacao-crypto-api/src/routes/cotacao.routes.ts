import { Router } from 'express';
import { CotacaoController } from '../controllers/CotacaoController';

const cotacaoRouter = Router();

const cotacaoController = new CotacaoController();

cotacaoRouter.get('/', cotacaoController.show);

export default cotacaoRouter;
