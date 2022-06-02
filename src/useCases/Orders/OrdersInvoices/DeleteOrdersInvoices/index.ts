import { PrismaOrdersInvoicesRepository } from '../../../../repositories/Orders/OrdersInvoices/implementations/PrismaOrdersInvoicesRepository';
import { DeleteOrderInvoiceController } from './DeleteOrderInvoiceController';
import { DeleteOrderInvoiceDataValidate } from './DeleteOrderInvoiceDataValidate';
import { DeleteOrderInvoiceUseCase } from './DeleteOrderInvoiceUseCase';

const deleteOrderInvoiceDataValidate = new DeleteOrderInvoiceDataValidate()
const ordersInvoicesRepository = new PrismaOrdersInvoicesRepository()

const deleteOrderInvoiceUseCase = new DeleteOrderInvoiceUseCase(deleteOrderInvoiceDataValidate, ordersInvoicesRepository)
const deleteOrderInvoiceController = new DeleteOrderInvoiceController(deleteOrderInvoiceUseCase)

export { deleteOrderInvoiceController, deleteOrderInvoiceUseCase }