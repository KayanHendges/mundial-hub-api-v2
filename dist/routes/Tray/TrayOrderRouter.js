"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrayOrderRouter = void 0;
const express_1 = require("express");
const ImportTrayOrder_1 = require("../../useCases/Orders/Orders/ImportTrayOrder");
const ListTrayOrders_1 = require("../../useCases/Orders/Orders/ListTrayOrders");
const TrayOrderRouter = (0, express_1.Router)();
exports.TrayOrderRouter = TrayOrderRouter;
TrayOrderRouter.get('/tray/orders', (request, response) => {
    return ListTrayOrders_1.listTrayOrdersController.handle(request, response);
});
TrayOrderRouter.post('/tray/orders/import', (request, response) => {
    return ImportTrayOrder_1.importTrayOrderController.handle(request, response);
});
