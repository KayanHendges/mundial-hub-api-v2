import { PrismaCustomersAddressesRepository } from '../../../../repositories/Customers/CustomersAddresses/implementarions/PrismaCustomersAddressesRepository';
import { UpdateCustomerAddressController } from './UpdateCustomerAddressController';
import { UpdateCustomerAddressDataValidate } from './UpdateCustomerAddressDataValidate';
import { UpdateCustomerAddressUseCase } from './UpdateCustomerAddressUseCase';

const updateCustomerAddressDataValidate = new UpdateCustomerAddressDataValidate()
const customersAddressesRepository = new PrismaCustomersAddressesRepository()

const updateCustomerAddressUseCase = new UpdateCustomerAddressUseCase(updateCustomerAddressDataValidate, customersAddressesRepository)
const updateCustomerAddressController = new UpdateCustomerAddressController(updateCustomerAddressUseCase)

export { updateCustomerAddressController, updateCustomerAddressUseCase }