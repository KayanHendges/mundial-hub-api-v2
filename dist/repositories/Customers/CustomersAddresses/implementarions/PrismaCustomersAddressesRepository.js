"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaCustomersAddressesRepository = void 0;
const prismaClient_1 = require("../../../../dataBase/prismaClient");
const paging_1 = __importDefault(require("../../../../prismaClient/functions/paging"));
class PrismaCustomersAddressesRepository {
    async list(params) {
        var _a;
        const paramsName = (_a = params === null || params === void 0 ? void 0 : params.customersAddresses) === null || _a === void 0 ? void 0 : _a.name;
        const containsName = paramsName ? {
            contains: paramsName
        } : undefined;
        const customersAddresses = await prismaClient_1.prismaClient.customerAddress.findMany(Object.assign({ where: Object.assign(Object.assign({}, params === null || params === void 0 ? void 0 : params.customersAddresses), { name: containsName }), orderBy: params === null || params === void 0 ? void 0 : params.sort }, (0, paging_1.default)(params === null || params === void 0 ? void 0 : params.paging)))
            .catch(err => {
            console.log(err);
            throw new Error('error getting customers addresses list from database');
        });
        if (customersAddresses) {
            return {
                customersAddresses,
                total: customersAddresses.length,
                sort: params === null || params === void 0 ? void 0 : params.sort,
                paging: params === null || params === void 0 ? void 0 : params.paging
            };
        }
    }
    async find(params) {
        const customerAddress = await prismaClient_1.prismaClient.customerAddress.findFirst({
            where: params
        }).catch(err => {
            throw new Error('error getting customerAddress list from database');
        });
        if (customerAddress) {
            return customerAddress;
        }
    }
    async save(customerAddress) {
        const created = await prismaClient_1.prismaClient.customerAddress.create({
            data: customerAddress
        }).catch(err => {
            console.log(err);
            throw new Error('error creating new customerAddress in database');
        });
        if (created) {
            return { id: created.id };
        }
    }
    async saveMany(customersAddresses) {
        const created = await prismaClient_1.prismaClient.customerAddress.createMany({
            data: customersAddresses,
            skipDuplicates: true
        }).catch(err => {
            console.log(err);
            throw new Error('error creating new customerAddresses in database');
        });
        if (created.count == 0) {
            throw new Error('any customersAddresses created');
        }
        return { customersAddressesCreated: created.count };
    }
    async update(customerAddress, id) {
        const updated = await prismaClient_1.prismaClient.customerAddress.update({
            data: customerAddress,
            where: { id }
        }).catch(err => {
            console.log(err);
            throw new Error('error updating customerAddress in database');
        });
        if (updated) {
            return updated;
        }
    }
    async delete(id) {
        const deleted = await prismaClient_1.prismaClient.customerAddress.delete({
            where: { id }
        }).catch(err => {
            console.log(err);
            throw new Error('error deleting customerAddress in database');
        });
        if (deleted) {
            return deleted.id;
        }
    }
}
exports.PrismaCustomersAddressesRepository = PrismaCustomersAddressesRepository;
