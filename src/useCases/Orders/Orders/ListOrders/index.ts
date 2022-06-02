import { PrismaOrdersRepository } from '../../../../repositories/Orders/Orders/implementations/PrismaOrdersRepository';
import { ListOrdersController } from './ListOrdersController';
import { ListOrdersDataValidate } from './ListOrdersDataValidate';
import { ListOrdersUseCase } from './ListOrdersUseCase';

const listOrdersDataValidate = new ListOrdersDataValidate()
const ordersRepository = new PrismaOrdersRepository()

const listOrdersUseCase = new ListOrdersUseCase(listOrdersDataValidate, ordersRepository)
const listOrdersController = new ListOrdersController(listOrdersUseCase)

export { listOrdersController, listOrdersUseCase }