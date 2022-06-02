import { request, Router } from "express";
import { getStoreController } from "../../useCases/Store/GetStore";
import { listStoresController } from "../../useCases/Store/ListStores";


const StoreRouter = Router()

    StoreRouter.get('/stores/find', (request, response) => {
        return getStoreController.handle(request, response)
    })

    StoreRouter.post('/stores/list', (request, response) => {
        return listStoresController.handle(request, response)
    })

export { StoreRouter }