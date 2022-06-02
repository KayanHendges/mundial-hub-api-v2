"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransporterRouter = void 0;
const express_1 = require("express");
const CreateTransporter_1 = require("../../useCases/Transporters/CreateTransporter");
const DeleteTransporter_1 = require("../../useCases/Transporters/DeleteTransporter");
const FindTransporter_1 = require("../../useCases/Transporters/FindTransporter");
const ListTransporters_1 = require("../../useCases/Transporters/ListTransporters");
const UpdateTransporter_1 = require("../../useCases/Transporters/UpdateTransporter");
const TransporterRouter = (0, express_1.Router)();
exports.TransporterRouter = TransporterRouter;
TransporterRouter.post('/transporters/list', (request, response) => {
    return ListTransporters_1.listTransportersController.handle(request, response);
});
TransporterRouter.post('/transporters/find', (request, response) => {
    return FindTransporter_1.findTransporterController.handle(request, response);
});
TransporterRouter.post('/transporters/create', (request, response) => {
    return CreateTransporter_1.createTransporterController.handle(request, response);
});
TransporterRouter.post('/transporters/update', (request, response) => {
    return UpdateTransporter_1.updateTransporterController.handle(request, response);
});
TransporterRouter.delete('/transporters/delete/:id', (request, response) => {
    return DeleteTransporter_1.deleteTransporterController.handle(request, response);
});
