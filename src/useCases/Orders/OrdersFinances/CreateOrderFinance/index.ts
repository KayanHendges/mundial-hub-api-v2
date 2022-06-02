import { PrismaOrdersRepository } from '../../../../repositories/Orders/Orders/implementations/PrismaOrdersRepository';
import { PrismaOrdersFinancesRepository } from '../../../../repositories/Orders/OrdersFinances/implementations/PrismaOrdersFinancesRepository';
import { CreateOrderFinanceController } from './CreateOrderFinanceController';
import { CreateOrderFinanceDataValidate } from './CreateOrderFinanceDataValidate';
import { CreateOrderFinanceUseCase } from './CreateOrderFinanceUseCase';

const createOrderFinanceDataValidate = new CreateOrderFinanceDataValidate()
const ordersFinancesRepository = new PrismaOrdersFinancesRepository()
const ordersRepository = new PrismaOrdersRepository()

const createOrderFinanceUseCase = new CreateOrderFinanceUseCase(createOrderFinanceDataValidate, ordersFinancesRepository, ordersRepository)
const createOrderFinanceController = new CreateOrderFinanceController(createOrderFinanceUseCase)

export { createOrderFinanceController, createOrderFinanceUseCase }