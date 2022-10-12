import { Router } from 'express';
import cotacaoRouter from './cotacao.routes';
import criptomoedasRouter from './criptomoedas.routes';

const routes = Router();

routes.use('/criptomoedas/cotacao', cotacaoRouter);
routes.use('/criptomoedas', criptomoedasRouter);

routes.get('/health', (_, response) => response.json({
  message: 'UP'
}));

export default routes;
