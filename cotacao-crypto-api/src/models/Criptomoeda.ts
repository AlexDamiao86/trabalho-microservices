import { v4 as uuid } from 'uuid';
import { CreateCriptomoedaDTO } from '../dto/CreateCriptomoedaRequestDTO';
import { UpdateCriptomoedaDTO } from '../dto/UpdateCriptomoedaRequestDTO';

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
    this.descricao = descricao;
    this.cotacao_compra = cotacao_compra;
    this.cotacao_venda = cotacao_venda;
    this.variacao = variacao;
    this.timestamp_atualizacao = new Date().toISOString();
  }

  public get getCodigo(): string {
    return this.codigo;
  }

  public atualizarCotacao({
    cotacao_compra,
    cotacao_venda,
    variacao
  }: UpdateCriptomoedaDTO): Criptomoeda {
    this.cotacao_compra = cotacao_compra;
    this.cotacao_venda = cotacao_venda;
    this.variacao = variacao;
    this.timestamp_atualizacao = new Date().toISOString();
    return this;
  }

}

export default Criptomoeda;
