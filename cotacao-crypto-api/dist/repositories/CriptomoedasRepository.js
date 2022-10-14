"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Criptomoeda_1 = __importDefault(require("../models/Criptomoeda"));
class CriptomoedasRepository {
    constructor() {
        this.criptomoedas = [];
    }
    create({ codigo, nome, descricao, cotacao_compra, cotacao_venda, variacao, }) {
        const criptomoeda = new Criptomoeda_1.default({
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
    findByCodigo(codigo) {
        const criptomoedaEncontrada = this.criptomoedas.find(criptomoeda => criptomoeda.getCodigo == codigo.toUpperCase());
        return criptomoedaEncontrada || null;
    }
    updateCripto(criptomoeda, { cotacao_compra, cotacao_venda, variacao }) {
        const criptomoedaAtualizada = criptomoeda.atualizarCotacao({
            cotacao_compra,
            cotacao_venda,
            variacao,
        });
        return criptomoedaAtualizada;
    }
    all() {
        return this.criptomoedas;
    }
}
exports.default = CriptomoedasRepository;
