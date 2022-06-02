import { Router } from "express"
import { createOrderFinanceController } from "../../useCases/Orders/OrdersFinances/CreateOrderFinance"
import { deleteOrderFinanceController } from "../../useCases/Orders/OrdersFinances/DeleteOrdersFinances"
import { findOrderFinanceController } from "../../useCases/Orders/OrdersFinances/FindOrderFinance"
import { listOrdersFinancesController } from "../../useCases/Orders/OrdersFinances/ListOrdersFinances"
import { updateOrderFinanceController } from "../../useCases/Orders/OrdersFinances/UpdateOrderFinance"


const OrderFinanceRouter = Router()

    // finances

    OrderFinanceRouter.post('/orders/finances/list', (request, response) => {
        return listOrdersFinancesController.handle(request, response)
    })

    OrderFinanceRouter.post('/orders/finances/find', (request, response) => {
        return findOrderFinanceController.handle(request, response)
    })

    OrderFinanceRouter.post('/orders/finances/create', (request, response) => {
        return createOrderFinanceController.handle(request, response)
    })

    OrderFinanceRouter.post('/orders/finances/update', (request, response) => {
        return updateOrderFinanceController.handle(request, response)
    })

    OrderFinanceRouter.delete('/orders/finances/delete/:id', (request, response) => {
        return deleteOrderFinanceController.handle(request, response)
    })


export { OrderFinanceRouter }