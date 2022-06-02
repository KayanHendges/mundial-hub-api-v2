"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderProductSoldRouter = void 0;
const express_1 = require("express");
const CreateOrderProductSold_1 = require("../../useCases/Orders/OrdersProductsSold/CreateOrderProductSold");
const DeleteOrderPoductSold_1 = require("../../useCases/Orders/OrdersProductsSold/DeleteOrderPoductSold");
const FindOrderProductSold_1 = require("../../useCases/Orders/OrdersProductsSold/FindOrderProductSold");
const ListOrdersProductsSold_1 = require("../../useCases/Orders/OrdersProductsSold/ListOrdersProductsSold");
const UpdateOrderProductSold_1 = require("../../useCases/Orders/OrdersProductsSold/UpdateOrderProductSold");
const OrderProductSoldRouter = (0, express_1.Router)();
exports.OrderProductSoldRouter = OrderProductSoldRouter;
// notes
OrderProductSoldRouter.post('/orders/products-sold/list', (request, response) => {
    return ListOrdersProductsSold_1.listOrdersProductsSoldController.handle(request, response);
});
OrderProductSoldRouter.post('/orders/products-sold/find', (request, response) => {
    return FindOrderProductSold_1.findOrderProductSoldController.handle(request, response);
});
OrderProductSoldRouter.post('/orders/products-sold/create', (request, response) => {
    return CreateOrderProductSold_1.createOrderProductSoldController.handle(request, response);
});
OrderProductSoldRouter.post('/orders/products-sold/update', (request, response) => {
    return UpdateOrderProductSold_1.updateOrderProductSoldController.handle(request, response);
});
OrderProductSoldRouter.delete('/orders/products-sold/delete/:id', (request, response) => {
    return DeleteOrderPoductSold_1.deleteOrderProductSoldController.handle(request, response);
});
