"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaCustomersRepository = void 0;
const prismaClient_1 = require("../../../../dataBase/prismaClient");
const paging_1 = __importDefault(require("../../../../prismaClient/functions/paging"));
class PrismaCustomersRepository {
    async list(params) {
        var _a, _b, _c, _d;
        const customers = await prismaClient_1.prismaClient.customer.findMany(Object.assign(Object.assign({ where: Object.assign(Object.assign({}, params === null || params === void 0 ? void 0 : params.customers), { name: {
                    contains: (_a = params === null || params === void 0 ? void 0 : params.customers) === null || _a === void 0 ? void 0 : _a.name,
                }, email: {
                    contains: (_b = params === null || params === void 0 ? void 0 : params.customers) === null || _b === void 0 ? void 0 : _b.email,
                }, cpf: {
                    contains: (_c = params === null || params === void 0 ? void 0 : params.customers) === null || _c === void 0 ? void 0 : _c.cpf,
                }, cnpj: {
                    contains: (_d = params === null || params === void 0 ? void 0 : params.customers) === null || _d === void 0 ? void 0 : _d.cnpj,
                } }), orderBy: params === null || params === void 0 ? void 0 : params.sort }, (0, paging_1.default)(params === null || params === void 0 ? void 0 : params.paging)), { include: {
                addresses: {}
            } }))
            .catch(err => {
            console.log(err);
            throw new Error('error getting transporters list from database');
        });
        if (customers) {
            return {
                customers,
                total: customers.length,
                sort: params === null || params === void 0 ? void 0 : params.sort,
                paging: params === null || params === void 0 ? void 0 : params.paging
            };
        }
    }
    async find(params) {
        const customer = await prismaClient_1.prismaClient.customer.findFirst({
            where: params,
            include: {
                addresses: {}
            }
        }).catch(err => {
            throw new Error('error getting customer list from database');
        });
        if (customer) {
            return customer;
        }
    }
    async save(customer) {
        const created = await prismaClient_1.prismaClient.customer.create({
            data: customer
        }).catch(err => {
            console.log(err);
            throw new Error('error creating new customer in database');
        });
        if (created) {
            return { id: created.id };
        }
    }
    async update(customer, id) {
        const updated = await prismaClient_1.prismaClient.customer.update({
            data: customer,
            where: { id }
        }).catch(err => {
            console.log(err);
            throw new Error('error updating customer in database');
        });
        if (updated) {
            return updated;
        }
    }
    async delete(id) {
        const deleted = await prismaClient_1.prismaClient.customer.delete({
            where: { id }
        }).catch(err => {
            console.log(err);
            throw new Error('error deleting customer in database');
        });
        if (deleted) {
            return;
        }
    }
}
exports.PrismaCustomersRepository = PrismaCustomersRepository;
