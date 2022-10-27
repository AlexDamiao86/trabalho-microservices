"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
require("express-async-errors");
const SubscribeTickerService_1 = __importDefault(require("./subscribers/SubscribeTickerService"));
const AppError_1 = require("./errors/AppError");
const { port } = require('./config/index');
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("tiny"));
app.use(express_1.default.static("public"));
app.use(routes_1.default);
app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(undefined, {
    swaggerOptions: {
        url: "/swagger.json",
    },
}));
app.use((err, request, response, _next) => {
    if (err instanceof AppError_1.AppError) {
        return response.status(err.status).json({
            message: err.message
        });
    }
    return response.status(500).json({
        message: `Erro interno do servidor ${err.message}`
    });
});
app.listen(port, () => {
    console.log('Servidor iniciado na porta ', port);
});
setTimeout(() => {
    SubscribeTickerService_1.default.execute();
}, 1000);
