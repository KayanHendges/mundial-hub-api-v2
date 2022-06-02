"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrderNoteUseCase = exports.createOrderNoteController = void 0;
const PrismaOrdersRepository_1 = require("../../../../repositories/Orders/Orders/implementations/PrismaOrdersRepository");
const PrismaOrdersNotesRepository_1 = require("../../../../repositories/Orders/OrdersNotes/implementations/PrismaOrdersNotesRepository");
const CreateOrderNoteController_1 = require("./CreateOrderNoteController");
const CreateOrderNoteDataValidate_1 = require("./CreateOrderNoteDataValidate");
const CreateOrderNoteUseCase_1 = require("./CreateOrderNoteUseCase");
const createOrderNoteDataValidate = new CreateOrderNoteDataValidate_1.CreateOrderNoteDataValidate();
const ordersNotesRepository = new PrismaOrdersNotesRepository_1.PrismaOrdersNotesRepository();
const ordersRepository = new PrismaOrdersRepository_1.PrismaOrdersRepository();
const createOrderNoteUseCase = new CreateOrderNoteUseCase_1.CreateOrderNoteUseCase(createOrderNoteDataValidate, ordersNotesRepository, ordersRepository);
exports.createOrderNoteUseCase = createOrderNoteUseCase;
const createOrderNoteController = new CreateOrderNoteController_1.CreateOrderNoteController(createOrderNoteUseCase);
exports.createOrderNoteController = createOrderNoteController;