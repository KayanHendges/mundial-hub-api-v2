import { PrismaOrdersPaymentsRepository } from '../../../../repositories/Orders/OrdersPayments/implementations/PrismaOrdersPaymentsRepository';
import { DeleteOrderPaymentController } from './DeleteOrderPaymentController';
import { DeleteOrderPaymentDataValidate } from './DeleteOrderPaymentDataValidate';
import { DeleteOrderPaymentUseCase } from './DeleteOrderPaymentUseCase';

const deleteOrderPaymentDataValidate = new DeleteOrderPaymentDataValidate()
const ordersPaymentsRepository = new PrismaOrdersPaymentsRepository()

const deleteOrderPaymentUseCase = new DeleteOrderPaymentUseCase(deleteOrderPaymentDataValidate, ordersPaymentsRepository)
const deleteOrderPaymentController = new DeleteOrderPaymentController(deleteOrderPaymentUseCase)

export { deleteOrderPaymentController, deleteOrderPaymentUseCase }