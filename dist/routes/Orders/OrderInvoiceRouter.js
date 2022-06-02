"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderInvoiceRouter = void 0;
const express_1 = require("express");
const ListOrdersInvoices_1 = require("../../useCases/Orders/OrdersInvoices/ListOrdersInvoices");
const FindOrderInvoice_1 = require("../../useCases/Orders/OrdersInvoices/FindOrderInvoice");
const CreateOrderInvoice_1 = require("../../useCases/Orders/OrdersInvoices/CreateOrderInvoice");
const UpdateInvoices_1 = require("../../useCases/Orders/OrdersInvoices/UpdateInvoices");
const DeleteOrdersInvoices_1 = require("../../useCases/Orders/OrdersInvoices/DeleteOrdersInvoices");
const OrderInvoiceRouter = (0, express_1.Router)();
exports.OrderInvoiceRouter = OrderInvoiceRouter;
// Invoices
OrderInvoiceRouter.post('/orders/invoices/list', (request, response) => {
    return ListOrdersInvoices_1.listOrdersInvoicesController.handle(request, response);
});
OrderInvoiceRouter.post('/orders/invoices/find', (request, response) => {
    return FindOrderInvoice_1.findOrderInvoiceController.handle(request, response);
});
OrderInvoiceRouter.post('/orders/invoices/create', (request, response) => {
    return CreateOrderInvoice_1.createOrderInvoiceController.handle(request, response);
});
OrderInvoiceRouter.post('/orders/invoices/update', (request, response) => {
    return UpdateInvoices_1.updateOrderInvoiceController.handle(request, response);
});
OrderInvoiceRouter.delete('/orders/invoices/delete/:id', (request, response) => {
    return DeleteOrdersInvoices_1.deleteOrderInvoiceController.handle(request, response);
});
