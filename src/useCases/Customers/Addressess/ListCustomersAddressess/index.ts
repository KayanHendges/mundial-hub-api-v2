import { PrismaCustomersAddressesRepository } from '../../../../repositories/Customers/CustomersAddresses/implementarions/PrismaCustomersAddressesRepository';
import { ListCustomersAddressesController } from './ListCustomersAddressesController';
import { ListCustomersAddressesDataValidate } from './ListCustomersAddressesDataValidate';
import { ListCustomersAddressesUseCase } from './ListCustomersAddressesUseCase';

const listCustomersAddressesDataValidate = new ListCustomersAddressesDataValidate()
const customersAddressesRepository = new PrismaCustomersAddressesRepository()

const listCustomersAddressesUseCase = new ListCustomersAddressesUseCase(listCustomersAddressesDataValidate, customersAddressesRepository)
const listCustomersAddressesController = new ListCustomersAddressesController(listCustomersAddressesUseCase)

export { listCustomersAddressesController, listCustomersAddressesUseCase }