"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderPaymentRouter = void 0;
const express_1 = require("express");
const CreateOrderPayment_1 = require("../../useCases/Orders/OrdersPayments/CreateOrderPayment");
const DeleteOrderPayment_1 = require("../../useCases/Orders/OrdersPayments/DeleteOrderPayment");
const FindOrderPayment_1 = require("../../useCases/Orders/OrdersPayments/FindOrderPayment");
const ListOrdersPayments_1 = require("../../useCases/Orders/OrdersPayments/ListOrdersPayments");
const UpdateOrderPayment_1 = require("../../useCases/Orders/OrdersPayments/UpdateOrderPayment");
const OrderPaymentRouter = (0, express_1.Router)();
exports.OrderPaymentRouter = OrderPaymentRouter;
// payments
OrderPaymentRouter.post('/orders/payments/list', (request, response) => {
    return ListOrdersPayments_1.listOrdersPaymentsController.handle(request, response);
});
OrderPaymentRouter.post('/orders/payments/find', (request, response) => {
    return FindOrderPayment_1.findOrderPaymentController.handle(request, response);
});
OrderPaymentRouter.post('/orders/payments/create', (request, response) => {
    return CreateOrderPayment_1.createOrderPaymentController.handle(request, response);
});
OrderPaymentRouter.post('/orders/payments/update', (request, response) => {
    return UpdateOrderPayment_1.updateOrderPaymentController.handle(request, response);
});
OrderPaymentRouter.delete('/orders/payments/delete/:id', (request, response) => {
    return DeleteOrderPayment_1.deleteOrderPaymentController.handle(request, response);
});
