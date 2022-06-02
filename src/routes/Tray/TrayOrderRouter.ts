import { Router } from "express";
import { importTrayOrderController } from "../../useCases/Orders/Orders/ImportTrayOrder";
import { listTrayOrdersController } from "../../useCases/Orders/Orders/ListTrayOrders";


const TrayOrderRouter = Router()

    TrayOrderRouter.get('/tray/orders', (request, response) => {
        return listTrayOrdersController.handle(request, response)
    })

    TrayOrderRouter.post('/tray/orders/import', (request, response) => {
        return importTrayOrderController.handle(request, response)
    })

export { TrayOrderRouter }