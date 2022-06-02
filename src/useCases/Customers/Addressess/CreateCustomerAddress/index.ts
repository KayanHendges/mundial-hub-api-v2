import { PrismaCustomersAddressesRepository } from '../../../../repositories/Customers/CustomersAddresses/implementarions/PrismaCustomersAddressesRepository';
import { CreateCustomerAddressController } from './CreateCustomerAddressController';
import { CreateCustomerAddressDataValidate } from './CreateCustomerAddressDataValidate';
import { CreateCustomerAddressUseCase } from './CreateCustomerAddressUseCase';

const createCustomerAddressDataValidate = new CreateCustomerAddressDataValidate()
const customerAddressRepository = new PrismaCustomersAddressesRepository()

const createCustomerAddressUseCase = new CreateCustomerAddressUseCase(createCustomerAddressDataValidate, customerAddressRepository)
const createCustomerAddressController = new CreateCustomerAddressController(createCustomerAddressUseCase)

export { createCustomerAddressController, createCustomerAddressUseCase }