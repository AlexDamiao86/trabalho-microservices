"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Criptomoeda {
    //cotacao_atual_compra: number;
    //cotacao_atual_venda: number;
    //variacao: number;
    // quantidade_maxima_transacao: number;
    // quantidade_minima_transacao: number;
    // timestamp_ultima_atualizacao: Date;
    constructor({ codigo, nome, descricao }) {
        this.id = (0, uuid_1.v4)();
        this.codigo = codigo;
        this.nome = nome;
        this.descricao = descricao;
        //this.cotacao_atual_compra = 0.0;
        //this.cotacao_atual_venda = 0.0;
        //this.variacao = 0.0;
    }
}
exports.default = Criptomoeda;
