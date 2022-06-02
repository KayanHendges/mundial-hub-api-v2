"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaOrdersRepository = void 0;
const prismaClient_1 = require("../../../../dataBase/prismaClient");
const paging_1 = __importDefault(require("../../../../prismaClient/functions/paging"));
class PrismaOrdersRepository {
    async list(params) {
        const orders = prismaClient_1.prismaClient.order.findMany(Object.assign({ where: params === null || params === void 0 ? void 0 : params.orders, orderBy: params === null || params === void 0 ? void 0 : params.sort }, (0, paging_1.default)(params === null || params === void 0 ? void 0 : params.paging)))
            .catch(err => {
            console.log(err);
            throw new Error('error getting orders list from database');
        });
        const total = prismaClient_1.prismaClient.order.count({})
            .catch(err => { throw new Error('error gettint total orders from database'); });
        await Promise.all([orders, total])
            .catch(err => { throw new Error(err); });
        if (orders) {
            return {
                orders: await orders,
                total: await total,
                sort: params === null || params === void 0 ? void 0 : params.sort,
                paging: params === null || params === void 0 ? void 0 : params.paging
            };
        }
    }
    async find(params) {
        const order = await prismaClient_1.prismaClient.order.findFirst({
            where: params
        }).catch(err => {
            throw new Error('error getting order list from database');
        });
        if (order) {
            return order;
        }
    }
    async save(order) {
        const created = await prismaClient_1.prismaClient.order.create({
            data: order
        }).catch(err => {
            throw new Error('error creating new order in database');
        });
        if (created) {
            return { id: created.id };
        }
    }
    async saveMany(orders) {
        const created = await prismaClient_1.prismaClient.order.createMany({
            data: orders,
            skipDuplicates: true
        }).catch(err => {
            console.log(err);
            throw new Error('error creating new orders in database');
        });
        if (created.count == 0) {
            throw new Error('any orders created');
        }
        return { ordersCreated: created.count };
    }
    async update(order, id) {
        const updated = await prismaClient_1.prismaClient.order.update({
            data: order,
            where: { id }
        }).catch(err => {
            console.log(err);
            throw new Error('error updating order in database');
        });
        if (updated) {
            return;
        }
    }
    async delete(id) {
        const deleted = await prismaClient_1.prismaClient.order.delete({
            where: { id }
        }).catch(err => {
            console.log(err);
            throw new Error('error deleting order in database');
        });
        if (deleted) {
            return;
        }
    }
}
exports.PrismaOrdersRepository = PrismaOrdersRepository;
