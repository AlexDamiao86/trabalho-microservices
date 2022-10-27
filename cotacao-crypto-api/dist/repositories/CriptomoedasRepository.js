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
            codigo: codigo.toUpperCase(),
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
    update(criptomoeda, { nome, descricao, cotacao_compra, cotacao_venda, variacao }) {
        const criptomoedaAtualizada = criptomoeda.atualizarCriptomoeda({
            nome,
            descricao,
            cotacao_compra,
            cotacao_venda,
            variacao
        });
        return criptomoedaAtualizada;
    }
    updateCotacao(criptomoeda, { cotacao_compra, cotacao_venda, variacao }) {
        const criptomoedaAtualizada = criptomoeda.atualizarCotacao({
            cotacao_compra,
            cotacao_venda,
            variacao,
        });
        return criptomoedaAtualizada;
    }
    delete(codigo) {
        const indexCripto = this.criptomoedas.findIndex(criptomoeda => {
            return criptomoeda.getCodigo === codigo.toUpperCase();
        });
        if (indexCripto != -1) {
            this.criptomoedas.splice(indexCripto, 1);
            return true;
        }
        return false;
    }
    all() {
        return this.criptomoedas;
    }
}
exports.default = CriptomoedasRepository;
