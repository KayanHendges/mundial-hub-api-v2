"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaOrdersFinancesRepository = void 0;
const prismaClient_1 = require("../../../../dataBase/prismaClient");
const paging_1 = __importDefault(require("../../../../prismaClient/functions/paging"));
class PrismaOrdersFinancesRepository {
    async list(params) {
        const ordersFinances = await prismaClient_1.prismaClient.orderFinance.findMany(Object.assign({ where: params === null || params === void 0 ? void 0 : params.ordersFinances, orderBy: params === null || params === void 0 ? void 0 : params.sort }, (0, paging_1.default)(params === null || params === void 0 ? void 0 : params.paging)))
            .catch(err => {
            console.log(err);
            throw new Error('error getting ordersFinances list from database');
        });
        if (ordersFinances) {
            return {
                ordersFinances,
                total: ordersFinances.length,
                sort: params === null || params === void 0 ? void 0 : params.sort,
                paging: params === null || params === void 0 ? void 0 : params.paging
            };
        }
    }
    async find(params) {
        const orderFinance = await prismaClient_1.prismaClient.orderFinance.findFirst({
            where: params
        }).catch(err => {
            throw new Error('error getting orderFinance list from database');
        });
        if (orderFinance) {
            return orderFinance;
        }
    }
    async save(orderFinance) {
        const created = await prismaClient_1.prismaClient.orderFinance.create({
            data: orderFinance
        }).catch(err => {
            console.log(err);
            throw new Error('error creating new orderFinance in database');
        });
        if (created) {
            return { id: created.id };
        }
    }
    async saveMany(ordersFinances) {
        const created = await prismaClient_1.prismaClient.orderFinance.createMany({
            data: ordersFinances,
            skipDuplicates: true
        }).catch(err => {
            console.log(err);
            throw new Error('error creating new ordersFinances in database');
        });
        if (created.count == 0) {
            throw new Error('any ordersFinances created');
        }
        return { ordersFinancesCreated: created.count };
    }
    async update(orderFinance, id) {
        const updated = await prismaClient_1.prismaClient.orderFinance.update({
            data: orderFinance,
            where: { id }
        }).catch(err => {
            console.log(err);
            throw new Error('error updating orderFinance in database');
        });
        if (updated) {
            return updated;
        }
    }
    async delete(id) {
        const deleted = await prismaClient_1.prismaClient.orderFinance.delete({
            where: id
        }).catch(err => {
            console.log(err);
            throw new Error('error deleting orderFinance in database');
        });
        if (deleted) {
            return deleted.id;
        }
    }
}
exports.PrismaOrdersFinancesRepository = PrismaOrdersFinancesRepository;
