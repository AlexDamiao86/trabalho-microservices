"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3333;
app.get('/', (request, response) => {
    return response.json({
        message: 'Hello World!'
    });
});
app.listen(PORT, () => {
    console.log('Server has started on port ', PORT);
});
