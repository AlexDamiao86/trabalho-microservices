import Criptomoeda from '../models/Criptomoeda';
import CriptomoedasRepository from '../repositories/CriptomoedasRepository';

interface RequestDTO {
  codigo: string;
  nome: string;
  descricao: string;
}

class CreateCriptomoedaService {
  private criptomoedasRepository: CriptomoedasRepository;

  constructor(criptomoedasRepository: CriptomoedasRepository) {
    this.criptomoedasRepository = criptomoedasRepository;
  }

  public execute({ codigo, nome, descricao }: RequestDTO): Criptomoeda {
    const criptomoeda = this.criptomoedasRepository.create({
      codigo,
      nome,
      descricao
    });

    return criptomoeda;
  }
}

export default CreateCriptomoedaService;
