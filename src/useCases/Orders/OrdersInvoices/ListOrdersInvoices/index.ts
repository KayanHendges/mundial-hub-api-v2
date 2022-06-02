import { PrismaOrdersInvoicesRepository } from '../../../../repositories/Orders/OrdersInvoices/implementations/PrismaOrdersInvoicesRepository';
import { ListOrdersInvoicesController } from './ListOrdersInvoicesController';
import { ListOrdersInvoicesDataValidate } from './ListOrdersInvoicesDataValidate';
import { ListOrdersInvoicesUseCase } from './ListOrdersInvoicesUseCase';

const listOrdersInvoicesDataValidate = new ListOrdersInvoicesDataValidate()
const ordersInvoicesRepository = new PrismaOrdersInvoicesRepository()

const listOrdersInvoicesUseCase = new ListOrdersInvoicesUseCase(listOrdersInvoicesDataValidate, ordersInvoicesRepository)
const listOrdersInvoicesController = new ListOrdersInvoicesController(listOrdersInvoicesUseCase)

export { listOrdersInvoicesController, listOrdersInvoicesUseCase }