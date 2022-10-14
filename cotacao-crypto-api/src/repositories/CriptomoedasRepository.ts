import { CreateCriptomoedaDTO } from '../dto/CreateCriptomoedaRequestDTO';
import Criptomoeda from '../models/Criptomoeda';

class CriptomoedasRepository {
  private criptomoedas: Criptomoeda[];

  constructor() {
    this.criptomoedas = [];
  }

  public create({
    codigo,
    nome,
    descricao,
    cotacao_compra,
    cotacao_venda,
    variacao
  }: CreateCriptomoedaDTO): Criptomoeda {
    const criptomoeda = new Criptomoeda({
      codigo,
      nome,
      descricao,
      cotacao_compra,
      cotacao_venda,
      variacao
    });
    this.criptomoedas.push(criptomoeda);
    return criptomoeda;
  }

  public all(): Criptomoeda[] {
    return this.criptomoedas;
  }
}

export default CriptomoedasRepository;
