"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CotacaoController_1 = require("../controllers/CotacaoController");
const cotacaoRouter = (0, express_1.Router)();
const cotacaoController = new CotacaoController_1.CotacaoController();
cotacaoRouter.get('/', cotacaoController.show);
exports.default = cotacaoRouter;
