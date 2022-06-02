import { PrismaCustomersAddressesRepository } from '../../../../repositories/Customers/CustomersAddresses/implementarions/PrismaCustomersAddressesRepository';
import { DeleteCustomerAddressController } from './DeleteCustomerAddressController';
import { DeleteCustomerAddressDataValidate } from './DeleteCustomerAddressDataValidate';
import { DeleteCustomerAddressUseCase } from './DeleteCustomerAddressUseCase';

const deleteCustomerAddressDataValidate = new DeleteCustomerAddressDataValidate()
const customersAddressessRepository = new PrismaCustomersAddressesRepository()

const deleteCustomerAddressUseCase = new DeleteCustomerAddressUseCase(deleteCustomerAddressDataValidate, customersAddressessRepository)
const deleteCustomerAddressController = new DeleteCustomerAddressController(deleteCustomerAddressUseCase)

export { deleteCustomerAddressController, deleteCustomerAddressUseCase }