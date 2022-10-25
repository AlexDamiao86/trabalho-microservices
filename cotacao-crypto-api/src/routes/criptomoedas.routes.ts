import { Router } from 'express';
import { CriptomoedaController } from '../controllers/CriptomoedaController';

const criptomoedasRouter = Router();

const criptomoedaController = new CriptomoedaController();

criptomoedasRouter.get('/', async (_req, res) => {
  const response = await criptomoedaController.show();
  return res.status(200).send(response);
});
criptomoedasRouter.get('/:codigo', async (req, res) => {
  const response = await criptomoedaController.find(req.params.codigo);
  return (response != null) ?
    res.status(200).json(response) :
    res.status(404).send();
});
criptomoedasRouter.post('/', async (req, res) => {
  const response = await criptomoedaController.create(req.body);
  return res.status(201).send(response);
});
criptomoedasRouter.delete('/:codigo', async (req, res) => {
  return (await criptomoedaController.destroy(req.params.codigo)) ?
    res.status(204).send() :
    res.status(404).send();
});
criptomoedasRouter.put('/:codigo', async (req, res) => {
  const response = await criptomoedaController.update(req.params.codigo, req.body);
  return (response != null) ?
    res.status(200).json(response) :
    res.status(404).send();
});
criptomoedasRouter.patch('/:codigo', async (req, res) => {
  const response = await criptomoedaController.updateCotacao(req.params.codigo, req.body);
  return (response != null) ?
    res.status(200).json(response) :
    res.status(404).send();
});

export default criptomoedasRouter;


