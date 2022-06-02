import { TrayOrderProvider } from '../../../providers/Tray/Orders/implementations/TrayOrderProvider'
import { GetOrderController } from './GetOrderController'
import { PrismaStoreRepository } from '../../../repositories/Store/implementations/PrismaStoreRepository'
import { GetOrderUseCase } from './GetOrderUseCase'

const storeRepository = new PrismaStoreRepository()
const orderProvider = new TrayOrderProvider()

const getOrderUseCase = new GetOrderUseCase(storeRepository, orderProvider)

const getOrderController = new GetOrderController(getOrderUseCase)

export { getOrderUseCase, getOrderController }