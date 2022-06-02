import { PrismaOrdersFinancesRepository } from '../../../../repositories/Orders/OrdersFinances/implementations/PrismaOrdersFinancesRepository';
import { UpdateOrderFinanceController } from './UpdateOrderFinanceController';
import { UpdateOrderFinanceDataValidate } from './UpdateOrderFinanceDataValidate';
import { UpdateOrderFinanceUseCase } from './UpdateOrderFinanceUseCase';

const updateOrderFinanceDataValidate = new UpdateOrderFinanceDataValidate()
const ordersFinancesRepository = new PrismaOrdersFinancesRepository()

const updateOrderFinanceUseCase = new UpdateOrderFinanceUseCase(updateOrderFinanceDataValidate, ordersFinancesRepository)
const updateOrderFinanceController = new UpdateOrderFinanceController(updateOrderFinanceUseCase)

export { updateOrderFinanceController, updateOrderFinanceUseCase }