import { Router } from "express";
import { createTransporterController } from "../../useCases/Transporters/CreateTransporter";
import { deleteTransporterController } from "../../useCases/Transporters/DeleteTransporter";
import { findTransporterController } from "../../useCases/Transporters/FindTransporter";
import { listTransportersController } from "../../useCases/Transporters/ListTransporters";
import { updateTransporterController } from "../../useCases/Transporters/UpdateTransporter";


const TransporterRouter = Router()

    TransporterRouter.post('/transporters/list', (request, response) => {
        return listTransportersController.handle(request, response)
    })

    TransporterRouter.post('/transporters/find', (request, response) => {
        return findTransporterController.handle(request, response)
    })

    TransporterRouter.post('/transporters/create', (request, response) => {
        return createTransporterController.handle(request, response)
    })

    TransporterRouter.post('/transporters/update', (request, response) => {
        return updateTransporterController.handle(request, response)
    })

    TransporterRouter.delete('/transporters/delete/:id', (request, response) => {
        return deleteTransporterController.handle(request, response)
    })

export { TransporterRouter }