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
    create({ codigo, nome, descricao, }) {
        const criptomoeda = new Criptomoeda_1.default({ codigo, nome, descricao });
        this.criptomoedas.push(criptomoeda);
        return criptomoeda;
    }
    all() {
        return this.criptomoedas;
    }
}
exports.default = CriptomoedasRepository;
