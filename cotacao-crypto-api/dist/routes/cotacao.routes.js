"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cotacaoRouter = (0, express_1.Router)();
const appointments = [];
cotacaoRouter.get('/', (request, response) => {
    const { provider, date } = request.body;
    const appointment = {
        provider,
        date,
    };
    appointments.push(appointment);
    return response.json(appointment);
});
exports.default = cotacaoRouter;
