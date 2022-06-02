import { PrismaOrdersMarketPlacesRepository } from '../../../../repositories/Orders/OrdersMarketPlaces/implementations/PrismaOrdersMarketPlacesRepository';
import { FindOrderMarketPlaceController } from './FindOrderMarketPlaceController';
import { FindOrderMarketPlaceDataValidate } from './FindOrderMarketPlaceDataValidate';
import { FindOrderMarketPlaceUseCase } from './FindOrderMarketPlaceUseCase';

const findOrderMarketPlaceDataValidate = new FindOrderMarketPlaceDataValidate()
const ordersMarketPlaceRepository = new PrismaOrdersMarketPlacesRepository()

const findOrderMarketPlaceUseCase = new FindOrderMarketPlaceUseCase(findOrderMarketPlaceDataValidate, ordersMarketPlaceRepository)
const findOrderMarketPlaceController = new FindOrderMarketPlaceController(findOrderMarketPlaceUseCase)

export { findOrderMarketPlaceController, findOrderMarketPlaceUseCase }