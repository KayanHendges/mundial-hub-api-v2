import { PrismaOrdersRepository } from '../../../../repositories/Orders/Orders/implementations/PrismaOrdersRepository';
import { PrismaOrdersPaymentsRepository } from '../../../../repositories/Orders/OrdersPayments/implementations/PrismaOrdersPaymentsRepository';
import { CreateOrderPaymentController } from './CreateOrderPaymentController';
import { CreateOrderPaymentDataValidate } from './CreateOrderPaymentDataValidate';
import { CreateOrderPaymentUseCase } from './CreateOrderPaymentUseCase';

const createOrderPaymentDataValidate = new CreateOrderPaymentDataValidate()
const ordersPaymentsRepository = new PrismaOrdersPaymentsRepository()
const ordersRespository = new PrismaOrdersRepository()

const createOrderPaymentUseCase = new CreateOrderPaymentUseCase(createOrderPaymentDataValidate, ordersPaymentsRepository, ordersRespository)
const createOrderPaymentController = new CreateOrderPaymentController(createOrderPaymentUseCase)

export { createOrderPaymentController, createOrderPaymentUseCase }