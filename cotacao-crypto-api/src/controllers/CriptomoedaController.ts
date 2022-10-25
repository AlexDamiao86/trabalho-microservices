import { Body, Path, Put, Patch, Get, Post, Delete, Route } from 'tsoa';
import { CriptomoedaDTO } from '../dto/CriptomoedaDTO';
import { CreateCriptomoedaDTO } from '../dto/CreateCriptomoedaRequestDTO';
import { UpdateCriptomoedaDTO } from '../dto/UpdateCriptomoedaRequestDTO';
import { UpdateCotacaoCriptomoedaDTO } from '../dto/UpdateCotacaoCriptomoedaRequestDTO';
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

  @Put("/:codigo")
  public async update(@Path() codigo: string, @Body() requestBody: UpdateCriptomoedaDTO): Promise<CriptomoedaDTO | null> {
    const { nome, descricao, cotacao_compra, cotacao_venda, variacao } = requestBody;

    const criptomoedaExistente = criptomoedasRepository.findByCodigo(codigo);

    return (criptomoedaExistente != null) ?
      criptomoedasRepository.update(criptomoedaExistente, {
        nome,
        descricao,
        cotacao_compra,
        cotacao_venda,
        variacao
      }) :
      null;
  }

  @Patch("/:codigo")
  public async updateCotacao(@Path() codigo: string, @Body() requestBody: UpdateCotacaoCriptomoedaDTO): Promise<CriptomoedaDTO | null> {
    const { cotacao_compra, cotacao_venda, variacao } = requestBody;

    const criptomoedaExistente = criptomoedasRepository.findByCodigo(codigo);

    return (criptomoedaExistente != null) ?
      criptomoedasRepository.updateCotacao(criptomoedaExistente, {
        cotacao_compra,
        cotacao_venda,
        variacao
      }) :
      null;
  }
}

export { CriptomoedaController };
