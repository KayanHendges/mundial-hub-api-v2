"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findCustomerUseCase = exports.findCustomerController = void 0;
const PrismaCustomersRepository_1 = require("../../../repositories/Customers/Customers/implementations/PrismaCustomersRepository");
const FindCustomerController_1 = require("./FindCustomerController");
const FindCustomerDataValidate_1 = require("./FindCustomerDataValidate");
const FindCustomerUseCase_1 = require("./FindCustomerUseCase");
const findCustomerDataValidate = new FindCustomerDataValidate_1.FindCustomerDataValidate();
const customersRepository = new PrismaCustomersRepository_1.PrismaCustomersRepository();
const findCustomerUseCase = new FindCustomerUseCase_1.FindCustomerUseCase(findCustomerDataValidate, customersRepository);
exports.findCustomerUseCase = findCustomerUseCase;
const findCustomerController = new FindCustomerController_1.FindCustomerController(findCustomerUseCase);
exports.findCustomerController = findCustomerController;