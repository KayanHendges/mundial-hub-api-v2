import { PrismaOrdersCompleteRepository } from '../../../../../repositories/Orders/OrdersComplete/implementations/PrismaOrdersCompleteRepository';
import { DeleteOrderCompleteController } from './DeleteOrderCompleteController';
import { DeleteOrderCompleteDataValidate } from './DeleteOrderCompleteDataValidate';
import { DeleteOrderCompleteUseCase } from './DeleteOrderCompleteUseCase';

const deleteOrderCompleteDataValidate = new DeleteOrderCompleteDataValidate()
const ordersCompleteRepository = new PrismaOrdersCompleteRepository()

const deleteOrderCompleteUseCase = new DeleteOrderCompleteUseCase(deleteOrderCompleteDataValidate, ordersCompleteRepository)
const deleteOrderCompleteController = new DeleteOrderCompleteController(deleteOrderCompleteUseCase)

export { deleteOrderCompleteController, deleteOrderCompleteUseCase }