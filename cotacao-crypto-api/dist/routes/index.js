"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cotacao_routes_1 = __importDefault(require("./cotacao.routes"));
const criptomoedas_routes_1 = __importDefault(require("./criptomoedas.routes"));
const routes = (0, express_1.Router)();
routes.use('/criptomoedas/cotacao', cotacao_routes_1.default);
routes.use('/criptomoedas', criptomoedas_routes_1.default);
routes.get('/health', (_, response) => response.json({
    message: 'UP'
}));
exports.default = routes;
