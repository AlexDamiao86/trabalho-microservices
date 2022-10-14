"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CriptomoedaController = void 0;
const CriptomoedasRepository_1 = __importDefault(require("../repositories/CriptomoedasRepository"));
const CreateUpdateCriptomoedaService_1 = __importDefault(require("../services/CreateUpdateCriptomoedaService"));
const criptomoedasRepository = new CriptomoedasRepository_1.default();
class CriptomoedaController {
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigo, nome, descricao } = request.body;
            const criptomoeda = new CreateUpdateCriptomoedaService_1.default(criptomoedasRepository).execute({
                codigo,
                nome,
                descricao,
                cotacao_compra: 0.0,
                cotacao_venda: 0.0,
                variacao: 0.0
            });
            return response.status(201).json(criptomoeda);
        });
    }
    show(_, response) {
        return __awaiter(this, void 0, void 0, function* () {
            return response.json(criptomoedasRepository.all());
        });
    }
}
exports.CriptomoedaController = CriptomoedaController;
