"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 0;
const startDate = (0, date_fns_1.format)(new Date(), 'dd/MM/yyyy hh:mm:ss');
app.listen(port, () => {
    console.log(`${startDate} - servidor iniciando na porta ${port}`);
});
