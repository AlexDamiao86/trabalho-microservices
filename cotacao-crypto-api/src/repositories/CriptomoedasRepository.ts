import { CreateCriptomoedaDTO } from '../dto/CreateCriptomoedaRequestDTO';
import { UpdateCriptomoedaDTO } from '../dto/UpdateCriptomoedaRequestDTO';
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
    variacao,
  }: CreateCriptomoedaDTO): Criptomoeda {
    const criptomoeda = new Criptomoeda({
      codigo,
      nome,
      descricao,
      cotacao_compra,
      cotacao_venda,
      variacao,
    });
    this.criptomoedas.push(criptomoeda);
    return criptomoeda;
  }

  public findByCodigo(codigo: string): Criptomoeda | null {

    const criptomoedaEncontrada = this.criptomoedas.find(
      criptomoeda => criptomoeda.getCodigo == codigo.toUpperCase(),
    );
    return criptomoedaEncontrada || null;
  }

  public update(
    criptomoeda: Criptomoeda,
    { cotacao_compra, cotacao_venda, variacao }: UpdateCriptomoedaDTO,
  ): Criptomoeda {
    const criptomoedaAtualizada = criptomoeda.atualizarCotacao({
      cotacao_compra,
      cotacao_venda,
      variacao,
    });
    return criptomoedaAtualizada;
  }

  public delete(codigo: string): boolean {
    const indexCripto = this.criptomoedas.findIndex(
      criptomoeda => {
        return criptomoeda.getCodigo === codigo.toUpperCase();
      }
    )
    if (indexCripto != -1) {
      this.criptomoedas.splice(indexCripto, 1);
      return true;
    }
    return false;
  }

  public all(): Criptomoeda[] {
    return this.criptomoedas;
  }
}

export default CriptomoedasRepository;
