"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUpdateCriptomoedaService = void 0;
class CreateUpdateCriptomoedaService {
    constructor(criptomoedasRepository) {
        this.criptomoedasRepository = criptomoedasRepository;
    }
    execute({ codigo, nome, descricao, cotacao_compra, cotacao_venda, variacao }) {
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
exports.CreateUpdateCriptomoedaService = CreateUpdateCriptomoedaService;
exports.default = CreateUpdateCriptomoedaService;
