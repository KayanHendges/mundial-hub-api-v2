import { PrismaCustomersAddressesRepository } from '../../../../repositories/Customers/CustomersAddresses/implementarions/PrismaCustomersAddressesRepository';
import { FindCustomerAddressController } from './FindCustomerAddressController';
import { FindCustomerAddressDataValidate } from './FindCustomerAddressDataValidate';
import { FindCustomerAddressUseCase } from './FindCustomerAddressUseCase';

const findCustomerAddressDataValidate = new FindCustomerAddressDataValidate()
const customerRepositoryRepository = new PrismaCustomersAddressesRepository()

const findCustomerAddressUseCase = new FindCustomerAddressUseCase(findCustomerAddressDataValidate, customerRepositoryRepository)
const findCustomerAddressController = new FindCustomerAddressController(findCustomerAddressUseCase)

export { findCustomerAddressController, findCustomerAddressUseCase }