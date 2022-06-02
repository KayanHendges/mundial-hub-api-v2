import { Router } from "express"

import { listOrdersNotesController } from "../../useCases/Orders/OrdersNotes/ListOrdersNotes"
import { findOrderNoteController } from "../../useCases/Orders/OrdersNotes/FindOrderNote"
import { createOrderNoteController } from "../../useCases/Orders/OrdersNotes/CreateOrderNote"
import { updateOrderNoteController } from "../../useCases/Orders/OrdersNotes/UpdateOrderNote"
import { deleteOrderNoteController } from "../../useCases/Orders/OrdersNotes/DeleteOrderNote"

const OrderNoteRouter = Router()

    // notes

    OrderNoteRouter.post('/orders/notes/list', (request, response) => {
        return listOrdersNotesController.handle(request, response)
    })

    OrderNoteRouter.post('/orders/notes/find', (request, response) => {
        return findOrderNoteController.handle(request, response)
    })

    OrderNoteRouter.post('/orders/notes/create', (request, response) => {
        return createOrderNoteController.handle(request, response)
    })

    OrderNoteRouter.post('/orders/notes/update', (request, response) => {
        return updateOrderNoteController.handle(request, response)
    })

    OrderNoteRouter.delete('/orders/notes/delete/:id', (request, response) => {
        return deleteOrderNoteController.handle(request, response)
    })


export { OrderNoteRouter }