import { PrismaOrdersNotesRepository } from '../../../../repositories/Orders/OrdersNotes/implementations/PrismaOrdersNotesRepository';
import { DeleteOrderNoteController } from './DeleteOrderNoteController';
import { DeleteOrderNoteDataValidate } from './DeleteOrderNoteDataValidate';
import { DeleteOrderNoteUseCase } from './DeleteOrderNoteUseCase';

const deleteOrderNoteDataValidate = new DeleteOrderNoteDataValidate()
const ordersNotesRepository = new PrismaOrdersNotesRepository()

const deleteOrderNoteUseCase = new DeleteOrderNoteUseCase(deleteOrderNoteDataValidate, ordersNotesRepository)
const deleteOrderNoteController = new DeleteOrderNoteController(deleteOrderNoteUseCase)

export { deleteOrderNoteController, deleteOrderNoteUseCase }