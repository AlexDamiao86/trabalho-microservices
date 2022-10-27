import { Body, Path, Put, Patch, Get, Post, Delete, Route, Controller, SuccessResponse } from 'tsoa';
import { CriptomoedaDTO } from '../dto/CriptomoedaDTO';
import { CreateCriptomoedaDTO } from '../dto/CreateCriptomoedaRequestDTO';
import { UpdateCriptomoedaDTO } from '../dto/UpdateCriptomoedaRequestDTO';
import { UpdateCotacaoCriptomoedaDTO } from '../dto/UpdateCotacaoCriptomoedaRequestDTO';
import * as yup from 'yup';
import { AppError } from '../errors/AppError';

const { criptomoedasRepository } = require('../loaders/CarregarCriptomoedasRepository');

@Route("criptomoedas")
export class CriptomoedaController extends Controller {

  @Get("/")
  public async show(): Promise<CriptomoedaDTO[]> {
    return criptomoedasRepository.all();
  }

  @Get("/:codigo")
  public async find(@Path() codigo: string): Promise<CriptomoedaDTO | null> {
    return criptomoedasRepository.findByCodigo(codigo);
  }

  @SuccessResponse("201", "Created")
  @Post("/")
  public async create(@Body() requestBody: CreateCriptomoedaDTO): Promise<CriptomoedaDTO> {
    const { codigo, nome, descricao, cotacao_compra, cotacao_venda, variacao } = requestBody;

    const schema = yup.object().shape({
      codigo: yup.string().required("Código da criptomoeda é obrigatório"),
      nome: yup.string().required("Nome da criptomoeda é obrigatório")
    })

    try {
      await schema.validate(requestBody, { abortEarly: false })
    } catch(error: any) {
      throw new AppError(error.errors[0] as string)
    }

    const criptomoedaExistente = criptomoedasRepository.findByCodigo(codigo);

    if (criptomoedaExistente) {
      throw new AppError("Criptomoeda existente. Utilize a opção de alterar (PUT)");
    }

    const novaCriptomoeda = criptomoedasRepository.create({
      codigo,
      nome,
      descricao,
      cotacao_compra,
      cotacao_venda,
      variacao,
    });

    return novaCriptomoeda as unknown as CriptomoedaDTO;
  }

  @SuccessResponse("204", "Deleted")
  @Delete("/:codigo")
  public async destroy(@Path() codigo: string): Promise<boolean> {
    return criptomoedasRepository.delete(codigo);
  }

  @Put("/:codigo")
  public async update(@Path() codigo: string, @Body() requestBody: UpdateCriptomoedaDTO): Promise<CriptomoedaDTO | null> {
    const { nome, descricao, cotacao_compra, cotacao_venda, variacao } = requestBody;

    const schema = yup.object().shape({
      nome: yup.string().required("Nome da criptomoeda é obrigatório")
    })

    try {
      await schema.validate(requestBody, { abortEarly: false })
    } catch(error) {
      throw new AppError(error as string);
    }

    const criptomoedaExistente = criptomoedasRepository.findByCodigo(codigo);

    if (!criptomoedaExistente) {
      throw new AppError("Criptomoeda não existe. Utilize a opção de criar (POST)", 404);
    }

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

    const schema = yup.object().shape({
      cotacao_compra: yup.string().required("Cotação de compra é obrigatória"),
      cotacao_venda: yup.string().required("Cotação de venda é obrigatória")
    })

    try {
      await schema.validate(requestBody, { abortEarly: false })
    } catch(error) {
      throw new AppError(error as string);
    }

    const criptomoedaExistente = criptomoedasRepository.findByCodigo(codigo);

    if (!criptomoedaExistente) {
      throw new AppError("Criptomoeda não existe. Utilize a opção de criar (POST)", 404);
    }

    return (criptomoedaExistente != null) ?
      criptomoedasRepository.updateCotacao(criptomoedaExistente, {
        cotacao_compra,
        cotacao_venda,
        variacao
      }) :
      null;
  }
}

