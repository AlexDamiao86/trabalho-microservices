import { AppDataSource } from '../data-source';
import { Criptomoeda } from '../entity/Criptomoeda';
import { CreateCriptomoedaDTO } from '../dto/CreateCriptomoedaRequestDTO';

export class CreateUpdateCriptomoedaService {

  public async execute({
    codigo,
    nome,
    descricao,
    cotacao_compra,
    cotacao_venda,
    variacao,
  }: CreateCriptomoedaDTO): Promise<Criptomoeda | void> {
    const criptomoedaExistente =
      await AppDataSource.getRepository(Criptomoeda).findOneBy({
        codigo: codigo.toUpperCase()
      });

    if (criptomoedaExistente) {
      // Atualizar criptomoeda
      AppDataSource.getRepository(Criptomoeda).merge(criptomoedaExistente, {
        codigo, nome, descricao, cotacao_compra, cotacao_venda, variacao
      });
      const criptomoedaAtualizada = await AppDataSource.getRepository(Criptomoeda).save(criptomoedaExistente);
      console.info('Atualizou criptomoeda');
      return criptomoedaAtualizada;
    } else {
      // Criar criptomoeda
      const criptomoeda = await AppDataSource.getRepository(Criptomoeda).create(
        { codigo, nome, descricao, cotacao_compra, cotacao_venda, variacao }
      );
      const criptomoedaNova = await AppDataSource.getRepository(Criptomoeda).save(criptomoeda);
      console.info('Criou criptomoeda');
      return criptomoedaNova;
    }
  }
}

export default CreateUpdateCriptomoedaService;
