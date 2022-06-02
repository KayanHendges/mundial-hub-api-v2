import { PrismaOrdersMarketPlacesRepository } from '../../../../repositories/Orders/OrdersMarketPlaces/implementations/PrismaOrdersMarketPlacesRepository';
import { ListOrdersMarketPlaceController } from './ListOrdersMarketPlaceController';
import { ListOrdersMarketPlaceDataValidate } from './ListOrdersMarketPlaceDataValidate';
import { ListOrdersMarketPlaceUseCase } from './ListOrdersMarketPlaceUseCase';

const listOrdersMarketPlaceDataValidate = new ListOrdersMarketPlaceDataValidate()
const ordersMarketPlaceRepository = new PrismaOrdersMarketPlacesRepository()

const listOrdersMarketPlaceUseCase = new ListOrdersMarketPlaceUseCase(listOrdersMarketPlaceDataValidate, ordersMarketPlaceRepository)
const listOrdersMarketPlaceController = new ListOrdersMarketPlaceController(listOrdersMarketPlaceUseCase)

export { listOrdersMarketPlaceController, listOrdersMarketPlaceUseCase }