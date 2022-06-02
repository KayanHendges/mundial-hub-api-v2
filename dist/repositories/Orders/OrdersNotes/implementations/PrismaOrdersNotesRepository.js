"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaOrdersNotesRepository = void 0;
const prismaClient_1 = require("../../../../dataBase/prismaClient");
const paging_1 = __importDefault(require("../../../../prismaClient/functions/paging"));
class PrismaOrdersNotesRepository {
    async list(params) {
        const ordersNotes = await prismaClient_1.prismaClient.orderNote.findMany(Object.assign({ where: params === null || params === void 0 ? void 0 : params.ordersNotes, orderBy: params === null || params === void 0 ? void 0 : params.sort }, (0, paging_1.default)(params === null || params === void 0 ? void 0 : params.paging)))
            .catch(err => {
            console.log(err);
            throw new Error('error getting ordersNotes list from database');
        });
        if (ordersNotes) {
            return {
                ordersNotes,
                total: ordersNotes.length,
                sort: params === null || params === void 0 ? void 0 : params.sort,
                paging: params === null || params === void 0 ? void 0 : params.paging
            };
        }
    }
    async find(params) {
        const orderNote = await prismaClient_1.prismaClient.orderNote.findFirst({
            where: params
        }).catch(err => {
            throw new Error('error getting orderNote list from database');
        });
        if (orderNote) {
            return orderNote;
        }
    }
    async save(orderNote) {
        const created = await prismaClient_1.prismaClient.orderNote.create({
            data: orderNote
        }).catch(err => {
            console.log(err);
            throw new Error('error creating new orderNote in database');
        });
        if (created) {
            return { id: created.id };
        }
    }
    async saveMany(ordersNotes) {
        const created = await prismaClient_1.prismaClient.orderNote.createMany({
            data: ordersNotes,
            skipDuplicates: true
        }).catch(err => {
            console.log(err);
            throw new Error('error creating new ordersNotes in database');
        });
        if (created.count == 0) {
            throw new Error('any ordersNotes created');
        }
        return { ordersNotesCreated: created.count };
    }
    async update(orderNote, id) {
        const updated = await prismaClient_1.prismaClient.orderNote.update({
            data: orderNote,
            where: { id }
        }).catch(err => {
            console.log(err);
            throw new Error('error updating orderNote in database');
        });
        if (updated) {
            return updated;
        }
    }
    async delete(id) {
        const deleted = await prismaClient_1.prismaClient.orderNote.delete({
            where: id
        }).catch(err => {
            console.log(err);
            throw new Error('error deleting orderNote in database');
        });
        if (deleted) {
            return deleted.id;
        }
    }
}
exports.PrismaOrdersNotesRepository = PrismaOrdersNotesRepository;
