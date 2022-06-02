"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOrderInvoiceUseCase = exports.findOrderInvoiceController = void 0;
const PrismaOrdersInvoicesRepository_1 = require("../../../../repositories/Orders/OrdersInvoices/implementations/PrismaOrdersInvoicesRepository");
const FindOrderInvoiceController_1 = require("./FindOrderInvoiceController");
const FindOrderInvoiceDataValidate_1 = require("./FindOrderInvoiceDataValidate");
const FindOrderInvoiceUseCase_1 = require("./FindOrderInvoiceUseCase");
const findOrderInvoiceDataValidate = new FindOrderInvoiceDataValidate_1.FindOrderInvoiceDataValidate();
const ordersInvoicesRepository = new PrismaOrdersInvoicesRepository_1.PrismaOrdersInvoicesRepository();
const findOrderInvoiceUseCase = new FindOrderInvoiceUseCase_1.FindOrderInvoiceUseCase(findOrderInvoiceDataValidate, ordersInvoicesRepository);
exports.findOrderInvoiceUseCase = findOrderInvoiceUseCase;
const findOrderInvoiceController = new FindOrderInvoiceController_1.FindOrderInvoiceController(findOrderInvoiceUseCase);
exports.findOrderInvoiceController = findOrderInvoiceController;