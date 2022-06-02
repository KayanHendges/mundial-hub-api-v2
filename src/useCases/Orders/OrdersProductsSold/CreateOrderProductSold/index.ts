import { PrismaOrdersRepository } from '../../../../repositories/Orders/Orders/implementations/PrismaOrdersRepository';
import { PrismaOrdersProductsSoldRepository } from '../../../../repositories/Orders/OrdersProductsSold/implementations/PrismaOrdersProductsSoldRepository';
import { CreateOrderProductSoldController } from './CreateOrderProductSoldController';
import { CreateOrderProductSoldDataValidate } from './CreateOrderProductSoldDataValidate';
import { CreateOrderProductSoldUseCase } from './CreateOrderProductSoldUseCase';

const createOrderProductSoldDataValidate = new CreateOrderProductSoldDataValidate()
const ordersProductsSoldRepository = new PrismaOrdersProductsSoldRepository()
const ordersRepository = new PrismaOrdersRepository()

const createOrderProductSoldUseCase = new CreateOrderProductSoldUseCase(createOrderProductSoldDataValidate, ordersProductsSoldRepository, ordersRepository)
const createOrderProductSoldController = new CreateOrderProductSoldController(createOrderProductSoldUseCase)

export { createOrderProductSoldController, createOrderProductSoldUseCase }