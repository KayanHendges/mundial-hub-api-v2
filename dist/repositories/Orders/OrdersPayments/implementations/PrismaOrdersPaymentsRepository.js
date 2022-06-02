"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaOrdersPaymentsRepository = void 0;
const prismaClient_1 = require("../../../../dataBase/prismaClient");
const paging_1 = __importDefault(require("../../../../prismaClient/functions/paging"));
class PrismaOrdersPaymentsRepository {
    async list(params) {
        const ordersPayments = await prismaClient_1.prismaClient.orderPayment.findMany(Object.assign({ where: params === null || params === void 0 ? void 0 : params.ordersPayments, orderBy: params === null || params === void 0 ? void 0 : params.sort }, (0, paging_1.default)(params === null || params === void 0 ? void 0 : params.paging)))
            .catch(err => {
            console.log(err);
            throw new Error('error getting ordersPayments list from database');
        });
        if (ordersPayments) {
            return {
                ordersPayments,
                total: ordersPayments.length,
                sort: params === null || params === void 0 ? void 0 : params.sort,
                paging: params === null || params === void 0 ? void 0 : params.paging
            };
        }
    }
    async find(params) {
        const orderPayment = await prismaClient_1.prismaClient.orderPayment.findFirst({
            where: params
        }).catch(err => {
            throw new Error('error getting orderPayment list from database');
        });
        if (orderPayment) {
            return orderPayment;
        }
    }
    async save(orderPayment) {
        const created = await prismaClient_1.prismaClient.orderPayment.create({
            data: orderPayment
        }).catch(err => {
            console.log(err);
            throw new Error('error creating new orderPayment in database');
        });
        if (created) {
            return { id: created.id };
        }
    }
    async saveMany(ordersPayments) {
        const created = await prismaClient_1.prismaClient.orderPayment.createMany({
            data: ordersPayments,
            skipDuplicates: true
        }).catch(err => {
            console.log(err);
            throw new Error('error creating new ordersPayments in database');
        });
        if (created.count == 0) {
            throw new Error('any ordersPayments created');
        }
        return { ordersPaymentsCreated: created.count };
    }
    async update(orderPayment, id) {
        const updated = await prismaClient_1.prismaClient.orderPayment.update({
            data: orderPayment,
            where: { id }
        }).catch(err => {
            console.log(err);
            throw new Error('error updating orderPayment in database');
        });
        if (updated) {
            return updated;
        }
    }
    async delete(id) {
        const deleted = await prismaClient_1.prismaClient.orderPayment.delete({
            where: id
        }).catch(err => {
            console.log(err);
            throw new Error('error deleting orderPayment in database');
        });
        if (deleted) {
            return deleted.id;
        }
    }
}
exports.PrismaOrdersPaymentsRepository = PrismaOrdersPaymentsRepository;
