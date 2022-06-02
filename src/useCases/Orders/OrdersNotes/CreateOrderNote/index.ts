import { PrismaOrdersRepository } from '../../../../repositories/Orders/Orders/implementations/PrismaOrdersRepository';
import { PrismaOrdersNotesRepository } from '../../../../repositories/Orders/OrdersNotes/implementations/PrismaOrdersNotesRepository';
import { CreateOrderNoteController } from './CreateOrderNoteController';
import { CreateOrderNoteDataValidate } from './CreateOrderNoteDataValidate';
import { CreateOrderNoteUseCase } from './CreateOrderNoteUseCase';

const createOrderNoteDataValidate = new CreateOrderNoteDataValidate()
const ordersNotesRepository = new PrismaOrdersNotesRepository()
const ordersRepository = new PrismaOrdersRepository()

const createOrderNoteUseCase = new CreateOrderNoteUseCase(createOrderNoteDataValidate, ordersNotesRepository, ordersRepository)
const createOrderNoteController = new CreateOrderNoteController(createOrderNoteUseCase)

export { createOrderNoteController, createOrderNoteUseCase }