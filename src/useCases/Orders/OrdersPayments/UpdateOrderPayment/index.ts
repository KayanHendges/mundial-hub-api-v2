import { PrismaOrdersPaymentsRepository } from '../../../../repositories/Orders/OrdersPayments/implementations/PrismaOrdersPaymentsRepository';
import { UpdateOrderPaymentController } from './UpdateOrderPaymentController';
import { UpdateOrderPaymentDataValidate } from './UpdateOrderPaymentDataValidate';
import { UpdateOrderPaymentUseCase } from './UpdateOrderPaymentUseCase';

const updateOrderPaymentDataValidate = new UpdateOrderPaymentDataValidate()
const ordersPaymentsRepository = new PrismaOrdersPaymentsRepository()

const updateOrderPaymentUseCase = new UpdateOrderPaymentUseCase(updateOrderPaymentDataValidate, ordersPaymentsRepository)
const updateOrderPaymentController = new UpdateOrderPaymentController(updateOrderPaymentUseCase)

export { updateOrderPaymentController, updateOrderPaymentUseCase }