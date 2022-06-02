import { Router } from "express"

import { listOrdersMarketPlaceController } from "../../useCases/Orders/OrdersMarketPlace/ListOrdersMarketPlace"
import { findOrderMarketPlaceController } from "../../useCases/Orders/OrdersMarketPlace/FindOrderMarketPlace"
import { createOrderMarketPlaceController } from "../../useCases/Orders/OrdersMarketPlace/CreateOrderMarketPlace"
import { updateOrderMarketPlaceController } from "../../useCases/Orders/OrdersMarketPlace/UpdateOrderMarketPlace"
import { deleteOrderMarketPlaceController } from "../../useCases/Orders/OrdersMarketPlace/DeleteOrderMarketPlace"

const OrderMarketPlaceRouter = Router()

    // payments

    OrderMarketPlaceRouter.post('/orders/marketplace/list', (request, response) => {
        return listOrdersMarketPlaceController.handle(request, response)
    })

    OrderMarketPlaceRouter.post('/orders/marketplace/find', (request, response) => {
        return findOrderMarketPlaceController.handle(request, response)
    })

    OrderMarketPlaceRouter.post('/orders/marketplace/create', (request, response) => {
        return createOrderMarketPlaceController.handle(request, response)
    })

    OrderMarketPlaceRouter.post('/orders/marketplace/update', (request, response) => {
        return updateOrderMarketPlaceController.handle(request, response)
    })

    OrderMarketPlaceRouter.delete('/orders/marketplace/delete/:id', (request, response) => {
        return deleteOrderMarketPlaceController.handle(request, response)
    })


export { OrderMarketPlaceRouter }