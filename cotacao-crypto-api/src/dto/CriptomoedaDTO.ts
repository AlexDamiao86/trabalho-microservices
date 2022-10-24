export interface CriptomoedaDTO {
  id: string;
  codigo: string;
  nome: string;
  descricao: string;
  cotacao_compra: number;
  cotacao_venda: number;
  variacao: number;
  timestamp_atualizacao: string;
}
