import { Request, Response } from 'express';
import CriptomoedasRepository from '../repositories/CriptomoedasRepository';
import CreateCriptomoedaService from '../services/CreateCriptomoedaService';

const criptomoedasRepository = new CriptomoedasRepository();

class CriptomoedaController {
  async create(request: Request, response: Response) {
    const { codigo, nome, descricao } = request.body;
    const criptomoeda = new CreateCriptomoedaService(
      criptomoedasRepository,
    ).execute({
      codigo,
      nome,
      descricao,
    });
    return response.status(201).json(criptomoeda);
  }

  async show(request: Request, response: Response) {
    return response.json(criptomoedasRepository.all());
  }
}

export { CriptomoedaController };
