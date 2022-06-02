"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCustomerAddressUseCase = exports.deleteCustomerAddressController = void 0;
const PrismaCustomersAddressesRepository_1 = require("../../../../repositories/Customers/CustomersAddresses/implementarions/PrismaCustomersAddressesRepository");
const DeleteCustomerAddressController_1 = require("./DeleteCustomerAddressController");
const DeleteCustomerAddressDataValidate_1 = require("./DeleteCustomerAddressDataValidate");
const DeleteCustomerAddressUseCase_1 = require("./DeleteCustomerAddressUseCase");
const deleteCustomerAddressDataValidate = new DeleteCustomerAddressDataValidate_1.DeleteCustomerAddressDataValidate();
const customersAddressessRepository = new PrismaCustomersAddressesRepository_1.PrismaCustomersAddressesRepository();
const deleteCustomerAddressUseCase = new DeleteCustomerAddressUseCase_1.DeleteCustomerAddressUseCase(deleteCustomerAddressDataValidate, customersAddressessRepository);
exports.deleteCustomerAddressUseCase = deleteCustomerAddressUseCase;
const deleteCustomerAddressController = new DeleteCustomerAddressController_1.DeleteCustomerAddressController(deleteCustomerAddressUseCase);
exports.deleteCustomerAddressController = deleteCustomerAddressController;
