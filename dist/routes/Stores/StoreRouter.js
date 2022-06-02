"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreRouter = void 0;
const express_1 = require("express");
const GetStore_1 = require("../../useCases/Store/GetStore");
const ListStores_1 = require("../../useCases/Store/ListStores");
const StoreRouter = (0, express_1.Router)();
exports.StoreRouter = StoreRouter;
StoreRouter.get('/stores/find', (request, response) => {
    return GetStore_1.getStoreController.handle(request, response);
});
StoreRouter.post('/stores/list', (request, response) => {
    return ListStores_1.listStoresController.handle(request, response);
});
