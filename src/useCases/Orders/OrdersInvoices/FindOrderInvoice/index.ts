import { PrismaOrdersInvoicesRepository } from '../../../../repositories/Orders/OrdersInvoices/implementations/PrismaOrdersInvoicesRepository';
import { FindOrderInvoiceController } from './FindOrderInvoiceController';
import { FindOrderInvoiceDataValidate } from './FindOrderInvoiceDataValidate';
import { FindOrderInvoiceUseCase } from './FindOrderInvoiceUseCase';

const findOrderInvoiceDataValidate = new FindOrderInvoiceDataValidate()
const ordersInvoicesRepository = new PrismaOrdersInvoicesRepository()

const findOrderInvoiceUseCase = new FindOrderInvoiceUseCase(findOrderInvoiceDataValidate, ordersInvoicesRepository)
const findOrderInvoiceController = new FindOrderInvoiceController(findOrderInvoiceUseCase)

export { findOrderInvoiceController, findOrderInvoiceUseCase }