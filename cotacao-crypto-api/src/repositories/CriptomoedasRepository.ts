import Criptomoeda from '../models/Criptomoeda';

interface CreateCriptomoedaDTO {
  codigo: string;
  nome: string;
  descricao: string;
}

class CriptomoedasRepository {
  private criptomoedas: Criptomoeda[];

  constructor() {
    this.criptomoedas = [];
  }

  public create({
    codigo,
    nome,
    descricao,
  }: CreateCriptomoedaDTO): Criptomoeda {
    const criptomoeda = new Criptomoeda({codigo, nome, descricao});
    this.criptomoedas.push(criptomoeda);
    return criptomoeda;
  }

  public all(): Criptomoeda[] {
    return this.criptomoedas;
  }
}

export default CriptomoedasRepository;
