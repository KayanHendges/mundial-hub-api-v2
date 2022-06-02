import { PrismaCustomersRepository } from '../../../repositories/Customers/Customers/implementations/PrismaCustomersRepository';
import { FindCustomerController } from './FindCustomerController';
import { FindCustomerDataValidate } from './FindCustomerDataValidate';
import { FindCustomerUseCase } from './FindCustomerUseCase';

const findCustomerDataValidate = new FindCustomerDataValidate()
const customersRepository = new PrismaCustomersRepository()

const findCustomerUseCase = new FindCustomerUseCase(findCustomerDataValidate, customersRepository)
const findCustomerController = new FindCustomerController(findCustomerUseCase)

export { findCustomerController, findCustomerUseCase }