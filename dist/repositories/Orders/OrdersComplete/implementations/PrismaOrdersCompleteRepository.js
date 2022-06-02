"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaOrdersCompleteRepository = void 0;
const prismaClient_1 = require("../../../../dataBase/prismaClient");
const paging_1 = __importDefault(require("../../../../prismaClient/functions/paging"));
class PrismaOrdersCompleteRepository {
    async list(params) {
        const orders = await prismaClient_1.prismaClient.order.findMany(Object.assign({ where: params === null || params === void 0 ? void 0 : params.orders, include: {
                customer: {
                    include: {
                        addresses: {}
                    }
                },
                marketPlaceOrder: {},
                finances: {},
                notes: {},
                payments: {},
                invoices: {},
                productsSold: {},
                transporter: {},
            }, orderBy: params === null || params === void 0 ? void 0 : params.sort }, (0, paging_1.default)(params === null || params === void 0 ? void 0 : params.paging)))
            .catch(err => {
            console.log(err);
            throw new Error('error getting orders list from database');
        });
        if (orders) {
            return {
                orders,
                total: orders.length,
                sort: params === null || params === void 0 ? void 0 : params.sort,
                paging: params === null || params === void 0 ? void 0 : params.paging
            };
        }
    }
    async find(params) {
        const order = await prismaClient_1.prismaClient.order.findFirst({
            where: params,
            include: {
                customer: {
                    include: {
                        addresses: {}
                    }
                },
                marketPlaceOrder: {},
                finances: {},
                notes: {},
                payments: {},
                invoices: {},
                productsSold: {},
                transporter: {},
            },
        }).catch(err => {
            throw new Error('error getting order list from database');
        });
        if (order) {
            return order;
        }
    }
    async delete(id) {
        const deleted = await prismaClient_1.prismaClient.order.delete({
            where: { id },
        }).catch(err => {
            console.log(err);
            throw new Error('error deleting order in database');
        });
        if (deleted) {
            return deleted.id;
        }
    }
}
exports.PrismaOrdersCompleteRepository = PrismaOrdersCompleteRepository;
