import { PrismaOrdersNotesRepository } from '../../../../repositories/Orders/OrdersNotes/implementations/PrismaOrdersNotesRepository';
import { ListOrdersNotesController } from './ListOrdersNotesController';
import { ListOrdersNotesDataValidate } from './ListOrdersNotesDataValidate';
import { ListOrdersNotesUseCase } from './ListOrdersNotesUseCase';

const listOrdersNotesDataValidate = new ListOrdersNotesDataValidate()
const ordersNotesRepository = new PrismaOrdersNotesRepository()

const listOrdersNotesUseCase = new ListOrdersNotesUseCase(listOrdersNotesDataValidate, ordersNotesRepository)
const listOrdersNotesController = new ListOrdersNotesController(listOrdersNotesUseCase)

export { listOrdersNotesController, listOrdersNotesUseCase }