import { PrismaOrdersFinancesRepository } from '../../../../repositories/Orders/OrdersFinances/implementations/PrismaOrdersFinancesRepository';
import { ListOrdersFinancesController } from './ListOrdersFinancesController';
import { ListOrdersFinancesDataValidate } from './ListOrdersFinancesDataValidate';
import { ListOrdersFinancesUseCase } from './ListOrdersFinancesUseCase';

const listOrdersFinancesDataValidate = new ListOrdersFinancesDataValidate()
const ordersFinancesRepository = new PrismaOrdersFinancesRepository()

const listOrdersFinancesUseCase = new ListOrdersFinancesUseCase(listOrdersFinancesDataValidate, ordersFinancesRepository)
const listOrdersFinancesController = new ListOrdersFinancesController(listOrdersFinancesUseCase)

export { listOrdersFinancesController, listOrdersFinancesUseCase }