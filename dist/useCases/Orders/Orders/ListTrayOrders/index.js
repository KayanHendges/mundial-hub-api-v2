"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listTrayOrdersUseCase = exports.listTrayOrdersController = void 0;
const TrayOrderProvider_1 = require("../../../../providers/Tray/Orders/implementations/TrayOrderProvider");
const PrismaOrdersRepository_1 = require("../../../../repositories/Orders/Orders/implementations/PrismaOrdersRepository");
const PrismaStoreRepository_1 = require("../../../../repositories/Store/implementations/PrismaStoreRepository");
const ListTrayOrdersController_1 = require("./ListTrayOrdersController");
const ListTrayOrdersDataValidate_1 = require("./ListTrayOrdersDataValidate");
const ListTrayOrdersUseCase_1 = require("./ListTrayOrdersUseCase");
const listTrayOrdersDataValidate = new ListTrayOrdersDataValidate_1.ListTrayOrdersDataValidate();
const storesRepository = new PrismaStoreRepository_1.PrismaStoreRepository();
const ordersRepository = new PrismaOrdersRepository_1.PrismaOrdersRepository();
const trayOrdersProvider = new TrayOrderProvider_1.TrayOrderProvider();
const listTrayOrdersUseCase = new ListTrayOrdersUseCase_1.ListTrayOrdersUseCase(listTrayOrdersDataValidate, storesRepository, ordersRepository, trayOrdersProvider);
exports.listTrayOrdersUseCase = listTrayOrdersUseCase;
const listTrayOrdersController = new ListTrayOrdersController_1.ListTrayOrdersController(listTrayOrdersUseCase);
exports.listTrayOrdersController = listTrayOrdersController;