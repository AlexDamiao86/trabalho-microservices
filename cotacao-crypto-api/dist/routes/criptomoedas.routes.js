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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CriptomoedaController_1 = require("../controllers/CriptomoedaController");
const criptomoedasRouter = (0, express_1.Router)();
const criptomoedaController = new CriptomoedaController_1.CriptomoedaController();
criptomoedasRouter.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield criptomoedaController.show();
    return res.status(200).send(response);
}));
criptomoedasRouter.get('/:codigo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield criptomoedaController.find(req.params.codigo);
    return (response != null) ?
        res.status(200).json(response) :
        res.status(404).send();
}));
criptomoedasRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield criptomoedaController.create(req.body);
    return res.status(201).send(response);
}));
criptomoedasRouter.delete('/:codigo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield criptomoedaController.destroy(req.params.codigo)) ?
        res.status(204).send() :
        res.status(404).send();
}));
exports.default = criptomoedasRouter;
