import { Router } from "express"
import { createOrderPaymentController } from "../../useCases/Orders/OrdersPayments/CreateOrderPayment"
import { deleteOrderPaymentController } from "../../useCases/Orders/OrdersPayments/DeleteOrderPayment"
import { findOrderPaymentController } from "../../useCases/Orders/OrdersPayments/FindOrderPayment"
import { listOrdersPaymentsController } from "../../useCases/Orders/OrdersPayments/ListOrdersPayments"
import { updateOrderPaymentController } from "../../useCases/Orders/OrdersPayments/UpdateOrderPayment"


const OrderPaymentRouter = Router()

    // payments

    OrderPaymentRouter.post('/orders/payments/list', (request, response) => {
        return listOrdersPaymentsController.handle(request, response)
    })

    OrderPaymentRouter.post('/orders/payments/find', (request, response) => {
        return findOrderPaymentController.handle(request, response)
    })

    OrderPaymentRouter.post('/orders/payments/create', (request, response) => {
        return createOrderPaymentController.handle(request, response)
    })

    OrderPaymentRouter.post('/orders/payments/update', (request, response) => {
        return updateOrderPaymentController.handle(request, response)
    })

    OrderPaymentRouter.delete('/orders/payments/delete/:id', (request, response) => {
        return deleteOrderPaymentController.handle(request, response)
    })


export { OrderPaymentRouter }