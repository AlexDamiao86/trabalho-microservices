export interface CreateCriptomoedaDTO {
  codigo: string;
  nome: string;
  descricao?: string;
  cotacao_compra?: number;
  cotacao_venda?: number;
  variacao?: number;
}


