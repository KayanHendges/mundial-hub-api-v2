import { PrismaOrdersProductsSoldRepository } from '../../../../repositories/Orders/OrdersProductsSold/implementations/PrismaOrdersProductsSoldRepository';
import { UpdateOrderProductSoldController } from './UpdateOrderProductSoldController';
import { UpdateOrderProductSoldDataValidate } from './UpdateOrderProductSoldDataValidate';
import { UpdateOrderProductSoldUseCase } from './UpdateOrderProductSoldUseCase';

const updateOrderProductSoldDataValidate = new UpdateOrderProductSoldDataValidate()
const ordersProductSoldRepository = new PrismaOrdersProductsSoldRepository()

const updateOrderProductSoldUseCase = new UpdateOrderProductSoldUseCase(updateOrderProductSoldDataValidate, ordersProductSoldRepository)
const updateOrderProductSoldController = new UpdateOrderProductSoldController(updateOrderProductSoldUseCase)

export { updateOrderProductSoldController, updateOrderProductSoldUseCase }