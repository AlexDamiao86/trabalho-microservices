import { Body, Path, Get, Post, Delete, Route } from 'tsoa';
import { CreateCriptomoedaDTO } from '../dto/CreateCriptomoedaRequestDTO';
import { CriptomoedaDTO } from '../dto/CriptomoedaDTO';
import CreateUpdateCriptomoedaService from "../services/CreateUpdateCriptomoedaService";

const { criptomoedasRepository } = require('../loaders/CarregarCriptomoedasRepository');

@Route("criptomoedas")
class CriptomoedaController {

  @Get("/")
  public async show(): Promise<CriptomoedaDTO[]> {
    return criptomoedasRepository.all();
  }

  @Get("/:codigo")
  public async find(@Path() codigo: string): Promise<CriptomoedaDTO | null> {
    return criptomoedasRepository.findByCodigo(codigo);
  }

  @Post("/")
  public async create(@Body() requestBody: CreateCriptomoedaDTO): Promise<CriptomoedaDTO> {
    const { codigo, nome, descricao, cotacao_compra, cotacao_venda, variacao } = requestBody;
    const novaCriptomoeda = new CreateUpdateCriptomoedaService(
      criptomoedasRepository,
    ).execute({
      codigo,
      nome,
      descricao,
      cotacao_compra,
      cotacao_venda,
      variacao
    });
    return novaCriptomoeda as unknown as CriptomoedaDTO;
  }

  @Delete("/:codigo")
  public async destroy(@Path() codigo: string): Promise<boolean> {
    return criptomoedasRepository.delete(codigo);
  }
}

export { CriptomoedaController };
