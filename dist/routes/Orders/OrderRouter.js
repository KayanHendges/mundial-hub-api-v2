"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRouter = void 0;
const express_1 = require("express");
const GetOrder_1 = require("../../useCases/Orders/GetOrder");
const DeleteOrderComplete_1 = require("../../useCases/Orders/Orders/Complete/DeleteOrderComplete");
const FindOrder_1 = require("../../useCases/Orders/Orders/FindOrder");
const ListOrders_1 = require("../../useCases/Orders/Orders/ListOrders");
const OrderRouter = (0, express_1.Router)();
exports.OrderRouter = OrderRouter;
OrderRouter.post('/orders/list', (request, response) => {
    return ListOrders_1.listOrdersController.handle(request, response);
});
OrderRouter.post('/orders/find', (request, response) => {
    return FindOrder_1.findOrderController.handle(request, response);
});
OrderRouter.get('/orders', (request, response) => {
    return GetOrder_1.getOrderController.handle(request, response);
});
// complete
OrderRouter.delete('/orders/complete/delete/:id', (request, response) => {
    return DeleteOrderComplete_1.deleteOrderCompleteController.handle(request, response);
});
