import { PrismaOrdersNotesRepository } from '../../../../repositories/Orders/OrdersNotes/implementations/PrismaOrdersNotesRepository';
import { UpdateOrderNoteController } from './UpdateOrderNoteController';
import { UpdateOrderNoteDataValidate } from './UpdateOrderNoteDataValidate';
import { UpdateOrderNoteUseCase } from './UpdateOrderNoteUseCase';

const updateOrderNoteDataValidate = new UpdateOrderNoteDataValidate()
const ordersNotesRepository = new PrismaOrdersNotesRepository()

const updateOrderNoteUseCase = new UpdateOrderNoteUseCase(updateOrderNoteDataValidate, ordersNotesRepository)
const updateOrderNoteController = new UpdateOrderNoteController(updateOrderNoteUseCase)

export { updateOrderNoteController, updateOrderNoteUseCase }