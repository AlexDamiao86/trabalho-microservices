"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCriptomoedaService {
    constructor(criptomoedasRepository) {
        this.criptomoedasRepository = criptomoedasRepository;
    }
    execute({ codigo, nome, descricao }) {
        const criptomoeda = this.criptomoedasRepository.create({
            codigo,
            nome,
            descricao
        });
        return criptomoeda;
    }
}
exports.default = CreateCriptomoedaService;
