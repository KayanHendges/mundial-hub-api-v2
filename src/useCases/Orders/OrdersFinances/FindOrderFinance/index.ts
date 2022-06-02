import { PrismaOrdersFinancesRepository } from '../../../../repositories/Orders/OrdersFinances/implementations/PrismaOrdersFinancesRepository';
import { FindOrderFinanceController } from './FindOrderFinanceController';
import { FindOrderFinanceDataValidate } from './FindOrderFinanceDataValidate';
import { FindOrderFinanceUseCase } from './FindOrderFinanceUseCase';

const findOrderFinanceDataValidate = new FindOrderFinanceDataValidate()
const ordersFinancesRepository = new PrismaOrdersFinancesRepository()

const findOrderFinanceUseCase = new FindOrderFinanceUseCase(findOrderFinanceDataValidate, ordersFinancesRepository)
const findOrderFinanceController = new FindOrderFinanceController(findOrderFinanceUseCase)

export { findOrderFinanceController, findOrderFinanceUseCase }