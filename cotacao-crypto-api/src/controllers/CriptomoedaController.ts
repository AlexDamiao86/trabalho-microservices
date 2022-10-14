import { Request, Response } from 'express';
import CreateUpdateCriptomoedaService from "../services/CreateUpdateCriptomoedaService";

const { criptomoedasRepository } = require('../loaders/CarregarCriptomoedasRepository');

class CriptomoedaController {
  async create(request: Request, response: Response) {
    const { codigo, nome, descricao } = request.body;
    const criptomoeda = new CreateUpdateCriptomoedaService(
      criptomoedasRepository,
    ).execute({
      codigo,
      nome,
      descricao,
      cotacao_compra: 0.0,
      cotacao_venda: 0.0,
      variacao: 0.0
    });
    return response.status(201).json(criptomoeda);
  }

  async show(_: Request, response: Response) {
    return response.json(criptomoedasRepository.all());
  }

  async find(request: Request, response: Response) {
    const { codigo } = request.params;
    const criptomoeda = criptomoedasRepository.findByCodigo(codigo);
    if (criptomoeda != null) {
      return response.status(200).json(criptomoeda);
    } else {
      return response.status(404).json({});
    }
  }
}

export { CriptomoedaController };
