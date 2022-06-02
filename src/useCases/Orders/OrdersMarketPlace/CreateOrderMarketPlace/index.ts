import { PrismaOrdersRepository } from '../../../../repositories/Orders/Orders/implementations/PrismaOrdersRepository';
import { PrismaOrdersMarketPlacesRepository } from '../../../../repositories/Orders/OrdersMarketPlaces/implementations/PrismaOrdersMarketPlacesRepository';
import { CreateOrderMarketPlaceController } from './CreateOrderMarketPlaceController';
import { CreateOrderMarketPlaceDataValidate } from './CreateOrderMarketPlaceDataValidate';
import { CreateOrderMarketPlaceUseCase } from './CreateOrderMarketPlaceUseCase';

const createOrderMarketPlaceDataValidate = new CreateOrderMarketPlaceDataValidate()
const ordersRepository = new PrismaOrdersRepository()
const ordersMarkePlaceRepository = new PrismaOrdersMarketPlacesRepository()

const createOrderMarketPlaceUseCase = new CreateOrderMarketPlaceUseCase(createOrderMarketPlaceDataValidate, ordersRepository, ordersMarkePlaceRepository)
const createOrderMarketPlaceController = new CreateOrderMarketPlaceController(createOrderMarketPlaceUseCase)

export { createOrderMarketPlaceController, createOrderMarketPlaceUseCase }