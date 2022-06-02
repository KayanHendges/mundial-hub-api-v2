import { PrismaOrdersMarketPlacesRepository } from '../../../../repositories/Orders/OrdersMarketPlaces/implementations/PrismaOrdersMarketPlacesRepository';
import { DeleteOrderMarketPlaceController } from './DeleteOrderMarketPlaceController';
import { DeleteOrderMarketPlaceDataValidate } from './DeleteOrderMarketPlaceDataValidate';
import { DeleteOrderMarketPlaceUseCase } from './DeleteOrderMarketPlaceUseCase';

const deleteOrderMarketPlaceDataValidate = new DeleteOrderMarketPlaceDataValidate()
const ordersMarketPlacesRepository = new PrismaOrdersMarketPlacesRepository()

const deleteOrderMarketPlaceUseCase = new DeleteOrderMarketPlaceUseCase(deleteOrderMarketPlaceDataValidate, ordersMarketPlacesRepository)
const deleteOrderMarketPlaceController = new DeleteOrderMarketPlaceController(deleteOrderMarketPlaceUseCase)

export { deleteOrderMarketPlaceController, deleteOrderMarketPlaceUseCase }