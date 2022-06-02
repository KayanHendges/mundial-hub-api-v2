import { Router } from "express";

import { createCustomerController } from "../../useCases/Customers/CreateCustomer";
import { deleteCustomerController } from "../../useCases/Customers/DeleteCustomer";
import { findCustomerController } from "../../useCases/Customers/FindCustomer";
import { listCustomersController } from "../../useCases/Customers/ListCustomers";
import { updateCustomerController } from "../../useCases/Customers/UpdateCustomer";

import { listCustomersAddressesController } from "../../useCases/Customers/Addressess/ListCustomersAddressess";
import { createCustomerAddressController } from "../../useCases/Customers/Addressess/CreateCustomerAddress";
import { updateCustomerAddressController } from "../../useCases/Customers/Addressess/UpdateCustomerAddress";
import { findCustomerAddressController } from "../../useCases/Customers/Addressess/FindCustomerAddress";
import { deleteCustomerAddressController } from "../../useCases/Customers/Addressess/DeleteCustomerAddress";

const CustomerRouter = Router()

    // customers

    CustomerRouter.post('/customers/list', (request, response) => {
        return listCustomersController.handle(request, response)
    })

    CustomerRouter.post('/customers/find', (request, response) => {
        return findCustomerController.handle(request, response)
    })

    CustomerRouter.post('/customers/create', (request, response) => {
        return createCustomerController.handle(request, response)
    })

    CustomerRouter.post('/customers/update', (request, response) => {
        return updateCustomerController.handle(request, response)
    })

    CustomerRouter.delete('/customers/delete/:id', (request, response) => {
        return deleteCustomerController.handle(request, response)
    })

    // customerAddresses

    CustomerRouter.post('/customers/addresses/list', (request, response) => {
        return listCustomersAddressesController.handle(request, response)
    })

    CustomerRouter.post('/customers/addresses/find', (request, response) => {
        return findCustomerAddressController.handle(request, response)
    })

    CustomerRouter.post('/customers/addresses/create', (request, response) => {
        return createCustomerAddressController.handle(request, response)
    })

    CustomerRouter.post('/customers/addresses/update', (request, response) => {
        return updateCustomerAddressController.handle(request, response)
    })

    CustomerRouter.delete('/customers/addresses/delete/:id', (request, response) => {
        return deleteCustomerAddressController.handle(request, response)
    })

export { CustomerRouter }