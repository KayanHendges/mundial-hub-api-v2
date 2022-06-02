import { PrismaCustomersRepository } from "../../../repositories/Customers/Customers/implementations/PrismaCustomersRepository";
import { UpdateCustomerController } from "./UpdateCustomerController";
import { UpdateCustomerDataValidate } from "./UpdateCustomerDataValidate";
import { UpdateCustomerUseCase } from "./UpdateCustomerUseCase";

const updateCustomerDataValidate = new UpdateCustomerDataValidate()
const customerRepository = new PrismaCustomersRepository()

const updateCustomerUseCase = new UpdateCustomerUseCase(updateCustomerDataValidate, customerRepository)

const updateCustomerController = new UpdateCustomerController(updateCustomerUseCase)

export { updateCustomerController, updateCustomerUseCase }