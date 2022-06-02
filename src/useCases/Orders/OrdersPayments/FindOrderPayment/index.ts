import { PrismaOrdersPaymentsRepository } from '../../../../repositories/Orders/OrdersPayments/implementations/PrismaOrdersPaymentsRepository';
import { FindOrderPaymentController } from './FindOrderPaymentController';
import { FindOrderPaymentDataValidate } from './FindOrderPaymentDataValidate';
import { FindOrderPaymentUseCase } from './FindOrderPaymentUseCase';

const findOrderPaymentDataValidate = new FindOrderPaymentDataValidate()
const ordersPaymentsRepository = new PrismaOrdersPaymentsRepository()

const findOrderPaymentUseCase = new FindOrderPaymentUseCase(findOrderPaymentDataValidate, ordersPaymentsRepository)
const findOrderPaymentController = new FindOrderPaymentController(findOrderPaymentUseCase)

export { findOrderPaymentController, findOrderPaymentUseCase }