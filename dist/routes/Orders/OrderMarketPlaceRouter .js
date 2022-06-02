"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderMarketPlaceRouter = void 0;
const express_1 = require("express");
const ListOrdersMarketPlace_1 = require("../../useCases/Orders/OrdersMarketPlace/ListOrdersMarketPlace");
const FindOrderMarketPlace_1 = require("../../useCases/Orders/OrdersMarketPlace/FindOrderMarketPlace");
const CreateOrderMarketPlace_1 = require("../../useCases/Orders/OrdersMarketPlace/CreateOrderMarketPlace");
const UpdateOrderMarketPlace_1 = require("../../useCases/Orders/OrdersMarketPlace/UpdateOrderMarketPlace");
const DeleteOrderMarketPlace_1 = require("../../useCases/Orders/OrdersMarketPlace/DeleteOrderMarketPlace");
const OrderMarketPlaceRouter = (0, express_1.Router)();
exports.OrderMarketPlaceRouter = OrderMarketPlaceRouter;
// payments
OrderMarketPlaceRouter.post('/orders/marketplace/list', (request, response) => {
    return ListOrdersMarketPlace_1.listOrdersMarketPlaceController.handle(request, response);
});
OrderMarketPlaceRouter.post('/orders/marketplace/find', (request, response) => {
    return FindOrderMarketPlace_1.findOrderMarketPlaceController.handle(request, response);
});
OrderMarketPlaceRouter.post('/orders/marketplace/create', (request, response) => {
    return CreateOrderMarketPlace_1.createOrderMarketPlaceController.handle(request, response);
});
OrderMarketPlaceRouter.post('/orders/marketplace/update', (request, response) => {
    return UpdateOrderMarketPlace_1.updateOrderMarketPlaceController.handle(request, response);
});
OrderMarketPlaceRouter.delete('/orders/marketplace/delete/:id', (request, response) => {
    return DeleteOrderMarketPlace_1.deleteOrderMarketPlaceController.handle(request, response);
});
