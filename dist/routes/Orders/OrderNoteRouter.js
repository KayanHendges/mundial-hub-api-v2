"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderNoteRouter = void 0;
const express_1 = require("express");
const ListOrdersNotes_1 = require("../../useCases/Orders/OrdersNotes/ListOrdersNotes");
const FindOrderNote_1 = require("../../useCases/Orders/OrdersNotes/FindOrderNote");
const CreateOrderNote_1 = require("../../useCases/Orders/OrdersNotes/CreateOrderNote");
const UpdateOrderNote_1 = require("../../useCases/Orders/OrdersNotes/UpdateOrderNote");
const DeleteOrderNote_1 = require("../../useCases/Orders/OrdersNotes/DeleteOrderNote");
const OrderNoteRouter = (0, express_1.Router)();
exports.OrderNoteRouter = OrderNoteRouter;
// notes
OrderNoteRouter.post('/orders/notes/list', (request, response) => {
    return ListOrdersNotes_1.listOrdersNotesController.handle(request, response);
});
OrderNoteRouter.post('/orders/notes/find', (request, response) => {
    return FindOrderNote_1.findOrderNoteController.handle(request, response);
});
OrderNoteRouter.post('/orders/notes/create', (request, response) => {
    return CreateOrderNote_1.createOrderNoteController.handle(request, response);
});
OrderNoteRouter.post('/orders/notes/update', (request, response) => {
    return UpdateOrderNote_1.updateOrderNoteController.handle(request, response);
});
OrderNoteRouter.delete('/orders/notes/delete/:id', (request, response) => {
    return DeleteOrderNote_1.deleteOrderNoteController.handle(request, response);
});
