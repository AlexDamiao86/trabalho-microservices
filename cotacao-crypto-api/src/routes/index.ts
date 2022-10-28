import { Router } from 'express';

const routes = Router();

routes.get('/health', (_, response) => response.json({
  message: 'UP'
}));

export default routes;
