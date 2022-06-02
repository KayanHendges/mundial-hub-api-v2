"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaOrdersInvoicesRepository = void 0;
const prismaClient_1 = require("../../../../dataBase/prismaClient");
const paging_1 = __importDefault(require("../../../../prismaClient/functions/paging"));
class PrismaOrdersInvoicesRepository {
    async list(params) {
        const ordersInvoices = await prismaClient_1.prismaClient.orderInvoice.findMany(Object.assign({ where: params === null || params === void 0 ? void 0 : params.ordersInvoices, orderBy: params === null || params === void 0 ? void 0 : params.sort }, (0, paging_1.default)(params === null || params === void 0 ? void 0 : params.paging)))
            .catch(err => {
            console.log(err);
            throw new Error('error getting ordersInvoices list from database');
        });
        if (ordersInvoices) {
            return {
                ordersInvoices,
                total: ordersInvoices.length,
                sort: params === null || params === void 0 ? void 0 : params.sort,
                paging: params === null || params === void 0 ? void 0 : params.paging
            };
        }
    }
    async find(params) {
        const orderInvoice = await prismaClient_1.prismaClient.orderInvoice.findFirst({
            where: params
        }).catch(err => {
            throw new Error('error getting orderInvoice list from database');
        });
        if (orderInvoice) {
            return orderInvoice;
        }
    }
    async save(orderInvoice) {
        const created = await prismaClient_1.prismaClient.orderInvoice.create({
            data: orderInvoice
        }).catch(err => {
            console.log(err);
            throw new Error('error creating new orderInvoice in database');
        });
        if (created) {
            return { id: created.id };
        }
    }
    async saveMany(ordersInvoices) {
        const created = await prismaClient_1.prismaClient.orderInvoice.createMany({
            data: ordersInvoices,
            skipDuplicates: true
        }).catch(err => {
            console.log(err);
            throw new Error('error creating new ordersInvoices in database');
        });
        if (created.count == 0) {
            throw new Error('any ordersInvoices created');
        }
        return { ordersInvoicesCreated: created.count };
    }
    async update(orderInvoice, id) {
        const updated = await prismaClient_1.prismaClient.orderInvoice.update({
            data: orderInvoice,
            where: { id }
        }).catch(err => {
            console.log(err);
            throw new Error('error updating orderInvoice in database');
        });
        if (updated) {
            return updated;
        }
    }
    async delete(id) {
        const deleted = await prismaClient_1.prismaClient.orderInvoice.delete({
            where: id
        }).catch(err => {
            console.log(err);
            throw new Error('error deleting orderInvoice in database');
        });
        if (deleted) {
            return deleted.id;
        }
    }
}
exports.PrismaOrdersInvoicesRepository = PrismaOrdersInvoicesRepository;
