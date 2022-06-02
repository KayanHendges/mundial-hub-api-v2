import { PrismaOrdersPaymentsRepository } from '../../../../repositories/Orders/OrdersPayments/implementations/PrismaOrdersPaymentsRepository';
import { ListOrdersPaymentsController } from './ListOrdersPaymentsController';
import { ListOrdersPaymentsDataValidate } from './ListOrdersPaymentsDataValidate';
import { ListOrdersPaymentsUseCase } from './ListOrdersPaymentsUseCase';

const listOrdersPaymentsDataValidate = new ListOrdersPaymentsDataValidate()
const ordersPaymentsRepository = new PrismaOrdersPaymentsRepository()

const listOrdersPaymentsUseCase = new ListOrdersPaymentsUseCase(listOrdersPaymentsDataValidate, ordersPaymentsRepository)
const listOrdersPaymentsController = new ListOrdersPaymentsController(listOrdersPaymentsUseCase)

export { listOrdersPaymentsController, listOrdersPaymentsUseCase }