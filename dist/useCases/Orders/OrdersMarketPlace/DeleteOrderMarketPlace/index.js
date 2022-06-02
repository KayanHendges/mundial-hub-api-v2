"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderMarketPlaceUseCase = exports.deleteOrderMarketPlaceController = void 0;
const PrismaOrdersMarketPlacesRepository_1 = require("../../../../repositories/Orders/OrdersMarketPlaces/implementations/PrismaOrdersMarketPlacesRepository");
const DeleteOrderMarketPlaceController_1 = require("./DeleteOrderMarketPlaceController");
const DeleteOrderMarketPlaceDataValidate_1 = require("./DeleteOrderMarketPlaceDataValidate");
const DeleteOrderMarketPlaceUseCase_1 = require("./DeleteOrderMarketPlaceUseCase");
const deleteOrderMarketPlaceDataValidate = new DeleteOrderMarketPlaceDataValidate_1.DeleteOrderMarketPlaceDataValidate();
const ordersMarketPlacesRepository = new PrismaOrdersMarketPlacesRepository_1.PrismaOrdersMarketPlacesRepository();
const deleteOrderMarketPlaceUseCase = new DeleteOrderMarketPlaceUseCase_1.DeleteOrderMarketPlaceUseCase(deleteOrderMarketPlaceDataValidate, ordersMarketPlacesRepository);
exports.deleteOrderMarketPlaceUseCase = deleteOrderMarketPlaceUseCase;
const deleteOrderMarketPlaceController = new DeleteOrderMarketPlaceController_1.DeleteOrderMarketPlaceController(deleteOrderMarketPlaceUseCase);
exports.deleteOrderMarketPlaceController = deleteOrderMarketPlaceController;
