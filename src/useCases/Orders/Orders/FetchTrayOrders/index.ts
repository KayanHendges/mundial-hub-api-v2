import { PrismaStoreRepository } from "../../../../repositories/Store/implementations/PrismaStoreRepository";
import { importTrayOrderUseCase } from "../ImportTrayOrder";
import { listTrayOrdersUseCase } from "../ListTrayOrders";
import { FetchTrayOrdersUseCase } from "./FetchTrayOrdersUseCase";

const storeRepository = new PrismaStoreRepository()

const fetchTrayOrdersUseCase = new FetchTrayOrdersUseCase(
    storeRepository,
    importTrayOrderUseCase,
    listTrayOrdersUseCase
)

export { fetchTrayOrdersUseCase }

