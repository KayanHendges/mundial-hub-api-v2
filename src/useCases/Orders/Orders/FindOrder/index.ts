import { PrismaOrdersRepository } from '../../../../repositories/Orders/Orders/implementations/PrismaOrdersRepository';
import { FindOrderController } from './FindOrderController';
import { FindOrderDataValidate } from './FindOrderDataValidate';
import { FindOrderUseCase } from './FindOrderUseCase';

const findOrderDataValidate = new FindOrderDataValidate()
const ordersRepository = new PrismaOrdersRepository()

const findOrderUseCase = new FindOrderUseCase(findOrderDataValidate, ordersRepository)
const findOrderController = new FindOrderController(findOrderUseCase)

export { findOrderController, findOrderUseCase }