import { PrismaCustomersRepository } from "../../../repositories/Customers/Customers/implementations/PrismaCustomersRepository";
import { CreateCustomerController } from "./CreateCustomerController";
import { CreateCustomerDataValidate } from "./CreateCustomerDataValidate";
import { CreateCustomerUseCase } from "./CreateCustomerUseCase";

const createCustomerDataValidate = new CreateCustomerDataValidate()
const customerRepository = new PrismaCustomersRepository()

const createCustomerUseCase = new CreateCustomerUseCase(createCustomerDataValidate, customerRepository)

const createCustomerController = new CreateCustomerController(createCustomerUseCase)

export { createCustomerController, createCustomerUseCase }