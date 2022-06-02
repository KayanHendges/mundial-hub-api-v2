import { TrayOrderProvider } from "../../../../providers/Tray/Orders/implementations/TrayOrderProvider";
import { PrismaOrdersRepository } from "../../../../repositories/Orders/Orders/implementations/PrismaOrdersRepository";
import { PrismaStoreRepository } from "../../../../repositories/Store/implementations/PrismaStoreRepository";
import { ListTrayOrdersController } from "./ListTrayOrdersController";
import { ListTrayOrdersDataValidate } from "./ListTrayOrdersDataValidate";
import { ListTrayOrdersUseCase } from "./ListTrayOrdersUseCase";

const listTrayOrdersDataValidate = new ListTrayOrdersDataValidate()
const storesRepository = new PrismaStoreRepository()
const ordersRepository = new PrismaOrdersRepository()
const trayOrdersProvider = new TrayOrderProvider()

const listTrayOrdersUseCase = new ListTrayOrdersUseCase(listTrayOrdersDataValidate, storesRepository , ordersRepository, trayOrdersProvider)

const listTrayOrdersController = new ListTrayOrdersController(listTrayOrdersUseCase)

export { listTrayOrdersController, listTrayOrdersUseCase }
