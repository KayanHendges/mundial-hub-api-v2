import { PrismaCustomersRepository } from '../../../repositories/Customers/Customers/implementations/PrismaCustomersRepository';
import { ListCustomersController } from './ListCustomersController';
import { ListCustomersDataValidate } from './ListCustomersDataValidate';
import { ListCustomersUseCase } from './ListCustomersUseCase';

const listCustomersDataValidate = new ListCustomersDataValidate()
const customersRepository = new PrismaCustomersRepository()

const listCustomersUseCase = new ListCustomersUseCase(listCustomersDataValidate, customersRepository)
const listCustomersController = new ListCustomersController(listCustomersUseCase)

export { listCustomersController, listCustomersUseCase }