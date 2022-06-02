"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaOrdersMarketPlacesRepository = void 0;
const prismaClient_1 = require("../../../../dataBase/prismaClient");
const paging_1 = __importDefault(require("../../../../prismaClient/functions/paging"));
class PrismaOrdersMarketPlacesRepository {
    async list(params) {
        const ordersMarketPlace = await prismaClient_1.prismaClient.orderMarketPlaceOrder.findMany(Object.assign({ where: params === null || params === void 0 ? void 0 : params.ordersMarketPlaces, orderBy: params === null || params === void 0 ? void 0 : params.sort }, (0, paging_1.default)(params === null || params === void 0 ? void 0 : params.paging)))
            .catch(err => {
            console.log(err);
            throw new Error('error getting ordersMarketPlaces list from database');
        });
        if (ordersMarketPlace) {
            return {
                ordersMarketPlace,
                total: ordersMarketPlace.length,
                sort: params === null || params === void 0 ? void 0 : params.sort,
                paging: params === null || params === void 0 ? void 0 : params.paging
            };
        }
    }
    async find(params) {
        const orderMarketPlaceOrder = await prismaClient_1.prismaClient.orderMarketPlaceOrder.findFirst({
            where: params
        }).catch(err => {
            throw new Error('error getting orderMarketPlaceOrder list from database');
        });
        if (orderMarketPlaceOrder) {
            return orderMarketPlaceOrder;
        }
    }
    async save(orderMarketPlaceOrder) {
        const created = await prismaClient_1.prismaClient.orderMarketPlaceOrder.create({
            data: orderMarketPlaceOrder
        }).catch(err => {
            console.log(err);
            throw new Error('error creating new orderMarketPlaceOrder in database');
        });
        if (created) {
            return { id: created.id };
        }
    }
    async saveMany(ordersMarketPlaces) {
        const created = await prismaClient_1.prismaClient.orderMarketPlaceOrder.createMany({
            data: ordersMarketPlaces,
            skipDuplicates: true
        }).catch(err => {
            console.log(err);
            throw new Error('error creating new orderMarketPlaceOrder in database');
        });
        if (created.count == 0) {
            throw new Error('any orderMarketPlaceOrder created');
        }
        return { ordersMarketPlacesCreated: created.count };
    }
    async update(orderMarketPlaceOrder, id) {
        const updated = await prismaClient_1.prismaClient.orderMarketPlaceOrder.update({
            data: orderMarketPlaceOrder,
            where: { id }
        }).catch(err => {
            console.log(err);
            throw new Error('error updating orderMarketPlaceOrder in database');
        });
        if (updated) {
            return updated;
        }
    }
    async delete(id) {
        const deleted = await prismaClient_1.prismaClient.orderMarketPlaceOrder.delete({
            where: id
        }).catch(err => {
            console.log(err);
            throw new Error('error deleting OrderMarketPlaceOrder in database');
        });
        if (deleted) {
            return deleted.id;
        }
    }
}
exports.PrismaOrdersMarketPlacesRepository = PrismaOrdersMarketPlacesRepository;
