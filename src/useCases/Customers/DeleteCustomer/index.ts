import { PrismaCustomersRepository } from '../../../repositories/Customers/Customers/implementations/PrismaCustomersRepository';
import { DeleteCustomerController } from './DeleteCustomerController';
import { DeleteCustomerDataValidate } from './DeleteCustomerDataValidate';
import { DeleteCustomerUseCase } from './DeleteCustomerUseCase';

const deleteCustomerDataValidate = new DeleteCustomerDataValidate()
const customersRepository = new PrismaCustomersRepository()

const deleteCustomerUseCase = new DeleteCustomerUseCase(deleteCustomerDataValidate, customersRepository)
const deleteCustomerController = new DeleteCustomerController(deleteCustomerUseCase)

export { deleteCustomerController, deleteCustomerUseCase }