"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderFinanceRouter = void 0;
const express_1 = require("express");
const CreateOrderFinance_1 = require("../../useCases/Orders/OrdersFinances/CreateOrderFinance");
const DeleteOrdersFinances_1 = require("../../useCases/Orders/OrdersFinances/DeleteOrdersFinances");
const FindOrderFinance_1 = require("../../useCases/Orders/OrdersFinances/FindOrderFinance");
const ListOrdersFinances_1 = require("../../useCases/Orders/OrdersFinances/ListOrdersFinances");
const UpdateOrderFinance_1 = require("../../useCases/Orders/OrdersFinances/UpdateOrderFinance");
const OrderFinanceRouter = (0, express_1.Router)();
exports.OrderFinanceRouter = OrderFinanceRouter;
// finances
OrderFinanceRouter.post('/orders/finances/list', (request, response) => {
    return ListOrdersFinances_1.listOrdersFinancesController.handle(request, response);
});
OrderFinanceRouter.post('/orders/finances/find', (request, response) => {
    return FindOrderFinance_1.findOrderFinanceController.handle(request, response);
});
OrderFinanceRouter.post('/orders/finances/create', (request, response) => {
    return CreateOrderFinance_1.createOrderFinanceController.handle(request, response);
});
OrderFinanceRouter.post('/orders/finances/update', (request, response) => {
    return UpdateOrderFinance_1.updateOrderFinanceController.handle(request, response);
});
OrderFinanceRouter.delete('/orders/finances/delete/:id', (request, response) => {
    return DeleteOrdersFinances_1.deleteOrderFinanceController.handle(request, response);
});
