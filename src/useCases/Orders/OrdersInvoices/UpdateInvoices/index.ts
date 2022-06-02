import { PrismaOrdersInvoicesRepository } from '../../../../repositories/Orders/OrdersInvoices/implementations/PrismaOrdersInvoicesRepository';
import { UpdateOrderInvoiceController } from './UpdateOrderInvoiceController';
import { UpdateOrderInvoiceDataValidate } from './UpdateOrderInvoiceDataValidate';
import { UpdateOrderInvoiceUseCase } from './UpdateOrderInvoiceUseCase';

const updateOrderInvoiceDataValidate = new UpdateOrderInvoiceDataValidate()
const ordersInvoicesRepository = new PrismaOrdersInvoicesRepository()

const updateOrderInvoiceUseCase = new UpdateOrderInvoiceUseCase(updateOrderInvoiceDataValidate, ordersInvoicesRepository)
const updateOrderInvoiceController = new UpdateOrderInvoiceController(updateOrderInvoiceUseCase)

export { updateOrderInvoiceController, updateOrderInvoiceUseCase }