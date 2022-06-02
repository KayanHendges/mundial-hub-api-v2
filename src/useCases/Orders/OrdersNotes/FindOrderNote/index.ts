import { PrismaOrdersNotesRepository } from '../../../../repositories/Orders/OrdersNotes/implementations/PrismaOrdersNotesRepository';
import { FindOrderNoteController } from './FindOrderNoteController';
import { FindOrderNoteDataValidate } from './FindOrderNoteDataValidate';
import { FindOrderNoteUseCase } from './FindOrderNoteUseCase';

const findOrderNoteDataValidate = new FindOrderNoteDataValidate()
const ordersNotesRepositoryRepository = new PrismaOrdersNotesRepository()

const findOrderNoteUseCase = new FindOrderNoteUseCase(findOrderNoteDataValidate, ordersNotesRepositoryRepository)
const findOrderNoteController = new FindOrderNoteController(findOrderNoteUseCase)

export { findOrderNoteController, findOrderNoteUseCase }