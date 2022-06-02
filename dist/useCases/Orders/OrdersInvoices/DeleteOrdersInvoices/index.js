"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderInvoiceUseCase = exports.deleteOrderInvoiceController = void 0;
const PrismaOrdersInvoicesRepository_1 = require("../../../../repositories/Orders/OrdersInvoices/implementations/PrismaOrdersInvoicesRepository");
const DeleteOrderInvoiceController_1 = require("./DeleteOrderInvoiceController");
const DeleteOrderInvoiceDataValidate_1 = require("./DeleteOrderInvoiceDataValidate");
const DeleteOrderInvoiceUseCase_1 = require("./DeleteOrderInvoiceUseCase");
const deleteOrderInvoiceDataValidate = new DeleteOrderInvoiceDataValidate_1.DeleteOrderInvoiceDataValidate();
const ordersInvoicesRepository = new PrismaOrdersInvoicesRepository_1.PrismaOrdersInvoicesRepository();
const deleteOrderInvoiceUseCase = new DeleteOrderInvoiceUseCase_1.DeleteOrderInvoiceUseCase(deleteOrderInvoiceDataValidate, ordersInvoicesRepository);
exports.deleteOrderInvoiceUseCase = deleteOrderInvoiceUseCase;
const deleteOrderInvoiceController = new DeleteOrderInvoiceController_1.DeleteOrderInvoiceController(deleteOrderInvoiceUseCase);
exports.deleteOrderInvoiceController = deleteOrderInvoiceController;
