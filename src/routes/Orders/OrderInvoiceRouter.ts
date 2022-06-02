import { Router } from "express"

import { listOrdersInvoicesController } from "../../useCases/Orders/OrdersInvoices/ListOrdersInvoices"
import { findOrderInvoiceController } from "../../useCases/Orders/OrdersInvoices/FindOrderInvoice"
import { createOrderInvoiceController } from "../../useCases/Orders/OrdersInvoices/CreateOrderInvoice"
import { updateOrderInvoiceController } from "../../useCases/Orders/OrdersInvoices/UpdateInvoices"
import { deleteOrderInvoiceController } from "../../useCases/Orders/OrdersInvoices/DeleteOrdersInvoices"

const OrderInvoiceRouter = Router()

    // Invoices

    OrderInvoiceRouter.post('/orders/invoices/list', (request, response) => {
        return listOrdersInvoicesController.handle(request, response)
    })

    OrderInvoiceRouter.post('/orders/invoices/find', (request, response) => {
        return findOrderInvoiceController.handle(request, response)
    })

    OrderInvoiceRouter.post('/orders/invoices/create', (request, response) => {
        return createOrderInvoiceController.handle(request, response)
    })

    OrderInvoiceRouter.post('/orders/invoices/update', (request, response) => {
        return updateOrderInvoiceController.handle(request, response)
    })

    OrderInvoiceRouter.delete('/orders/invoices/delete/:id', (request, response) => {
        return deleteOrderInvoiceController.handle(request, response)
    })


export { OrderInvoiceRouter }