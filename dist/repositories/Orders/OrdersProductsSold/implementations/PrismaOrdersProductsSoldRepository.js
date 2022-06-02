"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaOrdersProductsSoldRepository = void 0;
const prismaClient_1 = require("../../../../dataBase/prismaClient");
const paging_1 = __importDefault(require("../../../../prismaClient/functions/paging"));
class PrismaOrdersProductsSoldRepository {
    async list(params) {
        const ordersProductsSold = await prismaClient_1.prismaClient.orderProductSold.findMany(Object.assign({ where: params === null || params === void 0 ? void 0 : params.ordersProductsSold, orderBy: params === null || params === void 0 ? void 0 : params.sort }, (0, paging_1.default)(params === null || params === void 0 ? void 0 : params.paging)))
            .catch(err => {
            console.log(err);
            throw new Error('error getting ordersProductsSold list from database');
        });
        if (ordersProductsSold) {
            return {
                ordersProductsSold,
                total: ordersProductsSold.length,
                sort: params === null || params === void 0 ? void 0 : params.sort,
                paging: params === null || params === void 0 ? void 0 : params.paging
            };
        }
    }
    async find(params) {
        const orderProductSold = await prismaClient_1.prismaClient.orderProductSold.findFirst({
            where: params
        }).catch(err => {
            throw new Error('error getting orderProductSold list from database');
        });
        if (orderProductSold) {
            return orderProductSold;
        }
    }
    async save(orderProductSold) {
        const created = await prismaClient_1.prismaClient.orderProductSold.create({
            data: orderProductSold
        }).catch(err => {
            console.log(err);
            throw new Error('error creating new orderProductSold in database');
        });
        if (created) {
            return { id: created.id };
        }
    }
    async saveMany(ordersProductsSold) {
        const created = await prismaClient_1.prismaClient.orderProductSold.createMany({
            data: ordersProductsSold,
            skipDuplicates: true
        }).catch(err => {
            console.log(err);
            throw new Error('error creating new ordersProductsSold in database');
        });
        if (created.count == 0) {
            throw new Error('any ordersProductsSold created');
        }
        return { ordersProductsSoldCreated: created.count };
    }
    async update(orderProductSold, id) {
        const updated = await prismaClient_1.prismaClient.orderProductSold.update({
            data: orderProductSold,
            where: { id }
        }).catch(err => {
            console.log(err);
            throw new Error('error updating orderProductSold in database');
        });
        if (updated) {
            return updated;
        }
    }
    async delete(id) {
        const deleted = await prismaClient_1.prismaClient.orderProductSold.delete({
            where: id
        }).catch(err => {
            console.log(err);
            throw new Error('error deleting orderProductSold in database');
        });
        if (deleted) {
            return deleted.id;
        }
    }
}
exports.PrismaOrdersProductsSoldRepository = PrismaOrdersProductsSoldRepository;
