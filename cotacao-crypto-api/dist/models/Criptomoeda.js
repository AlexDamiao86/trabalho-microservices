"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Criptomoeda {
    constructor({ codigo, nome, descricao, cotacao_compra, cotacao_venda, variacao }) {
        this.id = (0, uuid_1.v4)();
        this.codigo = codigo;
        this.nome = nome;
        this.descricao = descricao;
        this.cotacao_compra = cotacao_compra;
        this.cotacao_venda = cotacao_venda;
        this.variacao = variacao;
        this.timestamp_atualizacao = new Date().toISOString();
    }
}
exports.default = Criptomoeda;
