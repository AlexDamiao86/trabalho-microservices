import Criptomoeda from '../models/Criptomoeda';
import CriptomoedasRepository from '../repositories/CriptomoedasRepository';
import { CreateCriptomoedaDTO } from '../dto/CreateCriptomoedaRequestDTO';

export class CreateUpdateCriptomoedaService {
  private criptomoedasRepository: CriptomoedasRepository;

  constructor(criptomoedasRepository: CriptomoedasRepository) {
    this.criptomoedasRepository = criptomoedasRepository;
  }

  public execute({
    codigo,
    nome,
    descricao,
    cotacao_compra,
    cotacao_venda,
    variacao
    }: CreateCriptomoedaDTO): Criptomoeda {

    const criptomoedaExistente = this.criptomoedasRepository.findByCodigo(codigo);

    if (criptomoedaExistente) {
      // Atualizar criptomoeda
      const criptomoedaAtualizada = this.criptomoedasRepository.updateCripto(
          criptomoedaExistente,
          {cotacao_compra, cotacao_venda, variacao}
        );
      console.log('Atualizou criptomoeda');
      return criptomoedaAtualizada;
    } else {
      // Criar criptomoeda
      const criptomoeda = this.criptomoedasRepository.create({
        codigo,
        nome,
        descricao,
        cotacao_compra,
        cotacao_venda,
        variacao
      });
      console.log('Criou criptomoeda');
      return criptomoeda;
    }
  }
}

export default CreateUpdateCriptomoedaService;
