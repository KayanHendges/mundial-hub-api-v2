import { Router } from "express"
import { createOrderProductSoldController } from "../../useCases/Orders/OrdersProductsSold/CreateOrderProductSold"
import { deleteOrderProductSoldController } from "../../useCases/Orders/OrdersProductsSold/DeleteOrderPoductSold"
import { findOrderProductSoldController } from "../../useCases/Orders/OrdersProductsSold/FindOrderProductSold"

import { listOrdersProductsSoldController } from "../../useCases/Orders/OrdersProductsSold/ListOrdersProductsSold"
import { updateOrderProductSoldController } from "../../useCases/Orders/OrdersProductsSold/UpdateOrderProductSold"

const OrderProductSoldRouter = Router()

    // notes

    OrderProductSoldRouter.post('/orders/products-sold/list', (request, response) => {
        return listOrdersProductsSoldController.handle(request, response)
    })

    OrderProductSoldRouter.post('/orders/products-sold/find', (request, response) => {
        return findOrderProductSoldController.handle(request, response)
    })

    OrderProductSoldRouter.post('/orders/products-sold/create', (request, response) => {
        return createOrderProductSoldController.handle(request, response)
    })

    OrderProductSoldRouter.post('/orders/products-sold/update', (request, response) => {
        return updateOrderProductSoldController.handle(request, response)
    })

    OrderProductSoldRouter.delete('/orders/products-sold/delete/:id', (request, response) => {
        return deleteOrderProductSoldController.handle(request, response)
    })


export { OrderProductSoldRouter }