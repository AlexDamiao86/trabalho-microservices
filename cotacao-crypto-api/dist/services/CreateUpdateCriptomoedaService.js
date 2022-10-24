"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUpdateCriptomoedaService = void 0;
class CreateUpdateCriptomoedaService {
    constructor(criptomoedasRepository) {
        this.criptomoedasRepository = criptomoedasRepository;
    }
    execute({ codigo, nome, descricao, cotacao_compra, cotacao_venda, variacao }) {
        const criptomoedaExistente = this.criptomoedasRepository.findByCodigo(codigo);
        if (criptomoedaExistente) {
            // Atualizar criptomoeda
            const criptomoedaAtualizada = this.criptomoedasRepository.update(criptomoedaExistente, { cotacao_compra, cotacao_venda, variacao });
            console.log('Atualizou criptomoeda');
            return criptomoedaAtualizada;
        }
        else {
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
exports.CreateUpdateCriptomoedaService = CreateUpdateCriptomoedaService;
exports.default = CreateUpdateCriptomoedaService;
