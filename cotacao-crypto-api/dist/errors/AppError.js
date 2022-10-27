"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
class AppError {
    constructor(message, status = 400) {
        this.message = message;
        this.status = status;
    }
}
exports.AppError = AppError;
;
