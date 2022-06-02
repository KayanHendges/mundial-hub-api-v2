import { PrismaOrdersMarketPlacesRepository } from '../../../../repositories/Orders/OrdersMarketPlaces/implementations/PrismaOrdersMarketPlacesRepository';
import { UpdateOrderMarketPlaceController } from './UpdateOrderMarketPlaceController';
import { UpdateOrderMarketPlaceDataValidate } from './UpdateOrderMarketPlaceDataValidate';
import { UpdateOrderMarketPlaceUseCase } from './UpdateOrderMarketPlaceUseCase';

const updateOrderMarketPlaceDataValidate = new UpdateOrderMarketPlaceDataValidate()
const ordersMarketPlaceRepository = new PrismaOrdersMarketPlacesRepository()

const updateOrderMarketPlaceUseCase = new UpdateOrderMarketPlaceUseCase(updateOrderMarketPlaceDataValidate, ordersMarketPlaceRepository)
const updateOrderMarketPlaceController = new UpdateOrderMarketPlaceController(updateOrderMarketPlaceUseCase)

export { updateOrderMarketPlaceController, updateOrderMarketPlaceUseCase }