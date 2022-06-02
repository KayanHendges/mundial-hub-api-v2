import { Router } from "express";
import { getOrderController } from "../../useCases/Orders/GetOrder";
import { deleteOrderCompleteController } from "../../useCases/Orders/Orders/Complete/DeleteOrderComplete";
import { findOrderController } from "../../useCases/Orders/Orders/FindOrder";
import { listOrdersController } from "../../useCases/Orders/Orders/ListOrders";

const OrderRouter = Router()

    OrderRouter.post('/orders/list', (request, response) => {
        return listOrdersController.handle(request, response)
    })

    OrderRouter.post('/orders/find', (request, response) => {
        return findOrderController.handle(request, response)
    })

    OrderRouter.get('/orders', (request, response) => {
        return getOrderController.handle(request, response)
    })

    // complete

    OrderRouter.delete('/orders/complete/delete/:id', (request, response) => {
        return deleteOrderCompleteController.handle(request, response)
    })

export { OrderRouter }