"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CriptomoedaController = void 0;
const tsoa_1 = require("tsoa");
const yup = __importStar(require("yup"));
const AppError_1 = require("../errors/AppError");
const { criptomoedasRepository } = require('../loaders/CarregarCriptomoedasRepository');
let CriptomoedaController = class CriptomoedaController extends tsoa_1.Controller {
    show() {
        return __awaiter(this, void 0, void 0, function* () {
            return criptomoedasRepository.all();
        });
    }
    find(codigo) {
        return __awaiter(this, void 0, void 0, function* () {
            return criptomoedasRepository.findByCodigo(codigo);
        });
    }
    create(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const { codigo, nome, descricao, cotacao_compra, cotacao_venda, variacao } = requestBody;
            const schema = yup.object().shape({
                codigo: yup.string().required("Código da criptomoeda é obrigatório"),
                nome: yup.string().required("Nome da criptomoeda é obrigatório")
            });
            try {
                yield schema.validate(requestBody, { abortEarly: false });
            }
            catch (error) {
                throw new AppError_1.AppError(error);
            }
            const criptomoedaExistente = criptomoedasRepository.findByCodigo(codigo);
            if (criptomoedaExistente) {
                throw new AppError_1.AppError("Criptomoeda existente. Utilize a opção de alterar (PUT)");
            }
            const novaCriptomoeda = criptomoedasRepository.create({
                codigo,
                nome,
                descricao,
                cotacao_compra,
                cotacao_venda,
                variacao,
            });
            return novaCriptomoeda;
        });
    }
    destroy(codigo) {
        return __awaiter(this, void 0, void 0, function* () {
            return criptomoedasRepository.delete(codigo);
        });
    }
    update(codigo, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, descricao, cotacao_compra, cotacao_venda, variacao } = requestBody;
            const schema = yup.object().shape({
                nome: yup.string().required("Nome da criptomoeda é obrigatório")
            });
            try {
                yield schema.validate(requestBody, { abortEarly: false });
            }
            catch (error) {
                throw new AppError_1.AppError(error);
            }
            const criptomoedaExistente = criptomoedasRepository.findByCodigo(codigo);
            if (!criptomoedaExistente) {
                throw new AppError_1.AppError("Criptomoeda não existe. Utilize a opção de criar (POST)", 404);
            }
            return (criptomoedaExistente != null) ?
                criptomoedasRepository.update(criptomoedaExistente, {
                    nome,
                    descricao,
                    cotacao_compra,
                    cotacao_venda,
                    variacao
                }) :
                null;
        });
    }
    updateCotacao(codigo, requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cotacao_compra, cotacao_venda, variacao } = requestBody;
            const schema = yup.object().shape({
                cotacao_compra: yup.string().required("Cotação de compra é obrigatória"),
                cotacao_venda: yup.string().required("Cotação de venda é obrigatória")
            });
            try {
                yield schema.validate(requestBody, { abortEarly: false });
            }
            catch (error) {
                throw new AppError_1.AppError(error);
            }
            const criptomoedaExistente = criptomoedasRepository.findByCodigo(codigo);
            if (!criptomoedaExistente) {
                throw new AppError_1.AppError("Criptomoeda não existe. Utilize a opção de criar (POST)", 404);
            }
            return (criptomoedaExistente != null) ?
                criptomoedasRepository.updateCotacao(criptomoedaExistente, {
                    cotacao_compra,
                    cotacao_venda,
                    variacao
                }) :
                null;
        });
    }
};
__decorate([
    (0, tsoa_1.Get)("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CriptomoedaController.prototype, "show", null);
__decorate([
    (0, tsoa_1.Get)("/:codigo"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CriptomoedaController.prototype, "find", null);
__decorate([
    (0, tsoa_1.Post)("/"),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CriptomoedaController.prototype, "create", null);
__decorate([
    (0, tsoa_1.Delete)("/:codigo"),
    __param(0, (0, tsoa_1.Path)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CriptomoedaController.prototype, "destroy", null);
__decorate([
    (0, tsoa_1.Put)("/:codigo"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CriptomoedaController.prototype, "update", null);
__decorate([
    (0, tsoa_1.Patch)("/:codigo"),
    __param(0, (0, tsoa_1.Path)()),
    __param(1, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CriptomoedaController.prototype, "updateCotacao", null);
CriptomoedaController = __decorate([
    (0, tsoa_1.Route)("criptomoedas")
], CriptomoedaController);
exports.CriptomoedaController = CriptomoedaController;
