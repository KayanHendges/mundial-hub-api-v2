import { PrismaOrdersProductsSoldRepository } from '../../../../repositories/Orders/OrdersProductsSold/implementations/PrismaOrdersProductsSoldRepository';
import { FindOrderProductSoldController } from './FindOrderProductSoldController';
import { FindOrderProductSoldDataValidate } from './FindOrderProductSoldDataValidate';
import { FindOrderProductSoldUseCase } from './FindOrderProductSoldUseCase';

const findOrderProductSoldDataValidate = new FindOrderProductSoldDataValidate()
const ordersProductsSoldRepository = new PrismaOrdersProductsSoldRepository()

const findOrderProductSoldUseCase = new FindOrderProductSoldUseCase(findOrderProductSoldDataValidate, ordersProductsSoldRepository)
const findOrderProductSoldController = new FindOrderProductSoldController(findOrderProductSoldUseCase)

export { findOrderProductSoldController, findOrderProductSoldUseCase }