"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRouter = void 0;
const express_1 = require("express");
const CreateCustomer_1 = require("../../useCases/Customers/CreateCustomer");
const DeleteCustomer_1 = require("../../useCases/Customers/DeleteCustomer");
const FindCustomer_1 = require("../../useCases/Customers/FindCustomer");
const ListCustomers_1 = require("../../useCases/Customers/ListCustomers");
const UpdateCustomer_1 = require("../../useCases/Customers/UpdateCustomer");
const ListCustomersAddressess_1 = require("../../useCases/Customers/Addressess/ListCustomersAddressess");
const CreateCustomerAddress_1 = require("../../useCases/Customers/Addressess/CreateCustomerAddress");
const UpdateCustomerAddress_1 = require("../../useCases/Customers/Addressess/UpdateCustomerAddress");
const FindCustomerAddress_1 = require("../../useCases/Customers/Addressess/FindCustomerAddress");
const DeleteCustomerAddress_1 = require("../../useCases/Customers/Addressess/DeleteCustomerAddress");
const CustomerRouter = (0, express_1.Router)();
exports.CustomerRouter = CustomerRouter;
// customers
CustomerRouter.post('/customers/list', (request, response) => {
    return ListCustomers_1.listCustomersController.handle(request, response);
});
CustomerRouter.post('/customers/find', (request, response) => {
    return FindCustomer_1.findCustomerController.handle(request, response);
});
CustomerRouter.post('/customers/create', (request, response) => {
    return CreateCustomer_1.createCustomerController.handle(request, response);
});
CustomerRouter.post('/customers/update', (request, response) => {
    return UpdateCustomer_1.updateCustomerController.handle(request, response);
});
CustomerRouter.delete('/customers/delete/:id', (request, response) => {
    return DeleteCustomer_1.deleteCustomerController.handle(request, response);
});
// customerAddresses
CustomerRouter.post('/customers/addresses/list', (request, response) => {
    return ListCustomersAddressess_1.listCustomersAddressesController.handle(request, response);
});
CustomerRouter.post('/customers/addresses/find', (request, response) => {
    return FindCustomerAddress_1.findCustomerAddressController.handle(request, response);
});
CustomerRouter.post('/customers/addresses/create', (request, response) => {
    return CreateCustomerAddress_1.createCustomerAddressController.handle(request, response);
});
CustomerRouter.post('/customers/addresses/update', (request, response) => {
    return UpdateCustomerAddress_1.updateCustomerAddressController.handle(request, response);
});
CustomerRouter.delete('/customers/addresses/delete/:id', (request, response) => {
    return DeleteCustomerAddress_1.deleteCustomerAddressController.handle(request, response);
});
