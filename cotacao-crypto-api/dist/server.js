"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const SubscribeTickerService_1 = __importDefault(require("./subscribers/SubscribeTickerService"));
const { port } = require('./config/index');
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(routes_1.default);
app.listen(port, () => {
    console.log('Server has started on port ', port);
});
setTimeout(() => {
    SubscribeTickerService_1.default.execute();
}, 1000);
