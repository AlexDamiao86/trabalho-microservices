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


    const criptomoeda = this.criptomoedasRepository.create({
      codigo,
      nome,
      descricao,
      cotacao_compra,
      cotacao_venda,
      variacao
    });

    return criptomoeda;
  }
}

export default CreateUpdateCriptomoedaService;
