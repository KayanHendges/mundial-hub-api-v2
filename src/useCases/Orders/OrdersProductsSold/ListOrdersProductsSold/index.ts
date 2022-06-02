import { PrismaOrdersProductsSoldRepository } from '../../../../repositories/Orders/OrdersProductsSold/implementations/PrismaOrdersProductsSoldRepository';
import { ListOrdersProductsSoldController } from './ListOrdersProductsSoldController';
import { ListOrdersProductsSoldDataValidate } from './ListOrdersProductsSoldDataValidate';
import { ListOrdersProductsSoldUseCase } from './ListOrdersProductsSoldUseCase';

const listOrdersProductsSoldDataValidate = new ListOrdersProductsSoldDataValidate()
const ordersProductsSoldRepository = new PrismaOrdersProductsSoldRepository()

const listOrdersProductsSoldUseCase = new ListOrdersProductsSoldUseCase(listOrdersProductsSoldDataValidate, ordersProductsSoldRepository)
const listOrdersProductsSoldController = new ListOrdersProductsSoldController(listOrdersProductsSoldUseCase)

export { listOrdersProductsSoldController, listOrdersProductsSoldUseCase }