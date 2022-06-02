import { PrismaOrdersProductsSoldRepository } from '../../../../repositories/Orders/OrdersProductsSold/implementations/PrismaOrdersProductsSoldRepository';
import { DeleteOrderProductSoldController } from './DeleteOrderProductSoldController';
import { DeleteOrderProductSoldDataValidate } from './DeleteOrderProductSoldDataValidate';
import { DeleteOrderProductSoldUseCase } from './DeleteOrderProductSoldUseCase';

const deleteOrderProductSoldDataValidate = new DeleteOrderProductSoldDataValidate()
const ordersProductsRepository = new PrismaOrdersProductsSoldRepository()

const deleteOrderProductSoldUseCase = new DeleteOrderProductSoldUseCase(deleteOrderProductSoldDataValidate, ordersProductsRepository)
const deleteOrderProductSoldController = new DeleteOrderProductSoldController(deleteOrderProductSoldUseCase)

export { deleteOrderProductSoldController, deleteOrderProductSoldUseCase }