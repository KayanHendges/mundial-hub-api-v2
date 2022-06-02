import { PrismaOrdersFinancesRepository } from '../../../../repositories/Orders/OrdersFinances/implementations/PrismaOrdersFinancesRepository';
import { DeleteOrderFinanceController } from './DeleteOrderFinanceController';
import { DeleteOrderFinanceDataValidate } from './DeleteOrderFinanceDataValidate';
import { DeleteOrderFinanceUseCase } from './DeleteOrderFinanceUseCase';

const deleteOrderFinanceDataValidate = new DeleteOrderFinanceDataValidate()
const ordersFinancesRepository = new PrismaOrdersFinancesRepository()

const deleteOrderFinanceUseCase = new DeleteOrderFinanceUseCase(deleteOrderFinanceDataValidate, ordersFinancesRepository)
const deleteOrderFinanceController = new DeleteOrderFinanceController(deleteOrderFinanceUseCase)

export { deleteOrderFinanceController, deleteOrderFinanceUseCase }