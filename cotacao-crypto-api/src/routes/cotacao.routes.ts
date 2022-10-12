import { Router } from 'express';

const cotacaoRouter = Router();

const appointments = [];

cotacaoRouter.get('/', (request, response) => {
  const { provider, date } = request.body;
  const appointment = {
    provider,
    date,
  };
  appointments.push(appointment);
  return response.json(appointment);
});

export default cotacaoRouter;
