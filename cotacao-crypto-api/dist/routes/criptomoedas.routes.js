"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CriptomoedaController_1 = require("../controllers/CriptomoedaController");
const criptomoedasRouter = (0, express_1.Router)();
const criptomoedaController = new CriptomoedaController_1.CriptomoedaController();
criptomoedasRouter.get('/', criptomoedaController.show);
criptomoedasRouter.post('/', criptomoedaController.create);
exports.default = criptomoedasRouter;
