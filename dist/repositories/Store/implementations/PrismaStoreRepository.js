"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaStoreRepository = void 0;
const prismaClient_1 = require("../../../dataBase/prismaClient");
class PrismaStoreRepository {
    async list(params) {
        const stores = await prismaClient_1.prismaClient.store.findMany({
            where: params
        });
        return stores;
    }
    async findByStoreCode(storeCode) {
        const store = await prismaClient_1.prismaClient.store.findFirst({
            where: { trayId: storeCode }
        });
        if (store) {
            return store;
        }
    }
}
exports.PrismaStoreRepository = PrismaStoreRepository;
