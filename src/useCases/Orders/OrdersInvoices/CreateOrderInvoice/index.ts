import { PrismaOrdersRepository } from '../../../../repositories/Orders/Orders/implementations/PrismaOrdersRepository';
import { PrismaOrdersInvoicesRepository } from '../../../../repositories/Orders/OrdersInvoices/implementations/PrismaOrdersInvoicesRepository';
import { CreateOrderInvoiceController } from './CreateOrderInvoiceController';
import { CreateOrderInvoiceDataValidate } from './CreateOrderInvoiceDataValidate';
import { CreateOrderInvoiceUseCase } from './CreateOrderInvoiceUseCase';

const createOrderInvoiceDataValidate = new CreateOrderInvoiceDataValidate()
const ordersInvoicesRepository = new PrismaOrdersInvoicesRepository()
const ordersRespository = new PrismaOrdersRepository()

const createOrderInvoiceUseCase = new CreateOrderInvoiceUseCase(createOrderInvoiceDataValidate, ordersInvoicesRepository, ordersRespository)
const createOrderInvoiceController = new CreateOrderInvoiceController(createOrderInvoiceUseCase)

export { createOrderInvoiceController, createOrderInvoiceUseCase }