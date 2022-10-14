import { v4 as uuid } from 'uuid';
import { CreateCriptomoedaDTO } from '../dto/CreateCriptomoedaRequestDTO';

class Criptomoeda {
  id: string;
  codigo: string;
  nome: string;
  descricao: string;
  cotacao_compra: number;
  cotacao_venda: number;
  variacao: number;
  timestamp_atualizacao: string;

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
}

export default Criptomoeda;
