import { Body, Path, Put, Patch, Get, Post, Delete, Route, Response, Controller,
  SuccessResponse, Res, TsoaResponse } from 'tsoa';
import { CriptomoedaDTO } from '../dto/CriptomoedaDTO';
import { CreateCriptomoedaDTO } from '../dto/CreateCriptomoedaRequestDTO';
import { UpdateCriptomoedaDTO } from '../dto/UpdateCriptomoedaRequestDTO';
import { UpdateCotacaoCriptomoedaDTO } from '../dto/UpdateCotacaoCriptomoedaRequestDTO';

const { criptomoedasRepository } = require('../loaders/CarregarCriptomoedasRepository');

interface ValidateErrorJSON {
  message: 'Erro de validação';
  details: { [name: string]: unknown };
}

@Route('criptomoedas')
export class CriptomoedaController extends Controller {
  /**
   * Recupera lista de criptomoedas disponibilizada por WebSocket API e outras criadas manualmente.
   * @summary Lista criptomoedas
   * @returns Lista de criptomoedas com nome, descricao, cotação, etc.
   */
  @Get('/')
  public async show(): Promise<CriptomoedaDTO[]> {
    return criptomoedasRepository.all();
  }

  /**
   * Recupera detalhes de uma determinado criptomoeda através de seu código.
   * @param codigo Código de criptomoeda. Exemplo: USDT.
   * @summary Recupera criptomoeda
   * @returns Criptomoeda com nome, descricao, cotação, etc.
   */
  @Get('{codigo}')
  public async execute(
    @Path() codigo: string,
    @Res() notFoundResponse: TsoaResponse< 404, { motivo: string; }>,
  ): Promise<CriptomoedaDTO | null> {
    return criptomoedasRepository.findByCodigo(codigo) != null
      ? criptomoedasRepository.findByCodigo(codigo)
      : notFoundResponse(404, { motivo: 'Criptomoeda não encontrada' });
  }

  /**
   * Cria uma nova criptomoeda.
   * @param requestBody Dados de criptomoeda como nome, descricao, cotação.
   * @summary Cria criptomoeda
   * @returns Criptomoeda criada.
   */
  @Response<ValidateErrorJSON>(422, 'Requisição inválida')
  @SuccessResponse('201', 'Criptomoeda criada')
  @Post('/')
  public async create(
    @Body() requestBody: CreateCriptomoedaDTO,
    @Res() notFoundResponse: TsoaResponse< 406, { motivo: string; }>,
  ): Promise<CriptomoedaDTO> {
    this.setStatus(201);
    const { codigo, nome, descricao, cotacao_compra, cotacao_venda, variacao } =
      requestBody;

    const criptomoedaExistente = criptomoedasRepository.findByCodigo(codigo);

    if (criptomoedaExistente) {
      return notFoundResponse(406, { motivo: 'Criptomoeda existente. Utilize a opção de alterar (PUT)' });
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

  /**
   * Exclui determinada criptomoeda através de seu código.
   * @param codigo Código de criptomoeda. Exemplo: USDT.
   * @summary Excluir criptomoeda
   * @returns Devolve 204 em caso de criptomoeda excluída com sucesso.
   */
  @Delete('/:codigo')
  @SuccessResponse('204', 'Criptomoeda excluída')
  public async destroy(
    @Path() codigo: string,
    @Res() notFoundResponse: TsoaResponse< 404, { motivo: string; }>,
  ): Promise<void> {
    this.setStatus(204);
    const criptomoedaExistente = criptomoedasRepository.findByCodigo(codigo);
    if (!criptomoedaExistente) {
      return notFoundResponse(404, { motivo: 'Criptomoeda não existe. Utilize a opção de criar (POST)' });
    }
    criptomoedasRepository.delete(codigo);
  }

  /**
   * Atualiza determinada criptomoeda através de seu código.
   * @param codigo Código de criptomoeda. Exemplo: USDT.
   * @param requestBody Dados de criptomoeda como nome, descricao, cotação.
   * @summary Atualiza criptomoeda
   * @returns Criptomoeda alterada.
   */
  @Response<ValidateErrorJSON>(422, 'Requisição inválida')
  @Put('/:codigo')
  public async update(
    @Path() codigo: string,
    @Body() requestBody: UpdateCriptomoedaDTO,
    @Res() notFoundResponse: TsoaResponse< 404, { motivo: string; }>,
  ): Promise<CriptomoedaDTO | null> {
    const { nome, descricao, cotacao_compra, cotacao_venda, variacao } =
      requestBody;

    const criptomoedaExistente = criptomoedasRepository.findByCodigo(codigo);

    if (!criptomoedaExistente) {
      return notFoundResponse(404, { motivo: 'Criptomoeda não existe. Utilize a opção de criar (POST)' });
    }

    return criptomoedasRepository.update(criptomoedaExistente, {
      nome,
      descricao,
      cotacao_compra,
      cotacao_venda,
      variacao,
    });
  }

  /**
   * Atualiza cotação de determinada criptomoeda através de seu código.
   * @param codigo Código de criptomoeda. Exemplo: USDT.
   * @param requestBody Dados de cotação da criptomoeda: Cotação de Compra, Cotação de Venda e Variação.
   * @summary Atualiza cotação criptomoeda informada.
   * @returns Criptomoeda alterada.
   */
  @Response<ValidateErrorJSON>(422, 'Requisição inválida')
  @Patch('{codigo}')
  public async updateCotacao(
    @Path() codigo: string,
    @Body() requestBody: UpdateCotacaoCriptomoedaDTO,
    @Res() notFoundResponse: TsoaResponse< 404, { motivo: string; }>,
  ): Promise<CriptomoedaDTO | null> {
    const { cotacao_compra, cotacao_venda, variacao } = requestBody;

    const criptomoedaExistente = criptomoedasRepository.findByCodigo(codigo);

    if (!criptomoedaExistente) {
      return notFoundResponse(404, { motivo: 'Criptomoeda não existe. Utilize a opção de criar (POST)' });
    }

    return criptomoedasRepository.updateCotacao(criptomoedaExistente, {
      cotacao_compra,
      cotacao_venda,
      variacao,
    });
  }
}
