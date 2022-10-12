import { v4 as uuidv4 } from 'uuid';

class Criptomoeda {
  id: string;
  codigo: string;
  nome: string;
  descricao: string;
  //cotacao_atual_compra: number;
  //cotacao_atual_venda: number;
  //variacao: number;
  // quantidade_maxima_transacao: number;
  // quantidade_minima_transacao: number;
  // timestamp_ultima_atualizacao: Date;

  constructor({ codigo, nome, descricao }: Omit<Criptomoeda, 'id'>) {
    this.id = uuidv4();
    this.codigo = codigo;
    this.nome = nome;
    this.descricao = descricao;
    //this.cotacao_atual_compra = 0.0;
    //this.cotacao_atual_venda = 0.0;
    //this.variacao = 0.0;
  }
}

export default Criptomoeda;


