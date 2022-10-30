import { v4 as uuid } from 'uuid';
import { CreateCriptomoedaDTO } from '../dto/CreateCriptomoedaRequestDTO';
import { UpdateCriptomoedaDTO } from '../dto/UpdateCriptomoedaRequestDTO';
import { UpdateCotacaoCriptomoedaDTO } from '../dto/UpdateCotacaoCriptomoedaRequestDTO';

class Criptomoeda {
  private id: string;
  private codigo: string;
  private nome: string;
  private descricao: string;
  private cotacao_compra: number;
  private cotacao_venda: number;
  private variacao: number;
  private timestamp_atualizacao: string;

  constructor({
    codigo,
    nome,
    descricao,
    cotacao_compra,
    cotacao_venda,
    variacao
   }: CreateCriptomoedaDTO) {
    this.id = uuid();
    this.codigo = codigo;
    this.nome = nome;
    this.descricao = descricao!;
    this.cotacao_compra = cotacao_compra!;
    this.cotacao_venda = cotacao_venda!;
    this.variacao = variacao!;
    this.timestamp_atualizacao = new Date().toISOString();
  }

  public get getId(): string {
    return this.id;
  }

  public get getCodigo(): string {
    return this.codigo;
  }

  public get getNome(): string {
    return this.nome;
  }

  public get getDescricao(): string {
    return this.descricao;
  }

  public get getCotacaoCompra(): number {
    return this.cotacao_compra;
  }

  public get getCotacaoVenda(): number {
    return this.cotacao_venda;
  }

  public get getVariacao(): number {
    return this.variacao;
  }

  public get getTimestampAtualizacao(): string {
    return this.timestamp_atualizacao;
  }

  public atualizarCriptomoeda({
    nome,
    descricao,
    cotacao_compra,
    cotacao_venda,
    variacao
  }: UpdateCriptomoedaDTO): Criptomoeda {
    this.nome = nome;
    this.descricao = descricao!;
    const cotacao_compra_null: number = cotacao_compra ?? 0;
    const cotacao_venda_null: number = cotacao_venda ?? 0;
    const variacao_null: number = variacao ?? 0;
    this.atualizarCotacao({cotacao_compra: cotacao_compra_null, cotacao_venda: cotacao_venda_null, variacao: variacao_null});
    return this;
  }

  public atualizarCotacao({
    cotacao_compra,
    cotacao_venda,
    variacao
  }: UpdateCotacaoCriptomoedaDTO): Criptomoeda {
    this.cotacao_compra = cotacao_compra;
    this.cotacao_venda = cotacao_venda;
    this.variacao = variacao!;
    this.timestamp_atualizacao = new Date().toISOString();
    return this;
  }

}

export default Criptomoeda;
