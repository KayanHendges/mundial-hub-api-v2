"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaTransporterRepository = void 0;
const prismaClient_1 = require("../../../dataBase/prismaClient");
const paging_1 = __importDefault(require("../../../prismaClient/functions/paging"));
class PrismaTransporterRepository {
    async list(params) {
        var _a;
        const transporters = await prismaClient_1.prismaClient.transporter.findMany(Object.assign({ where: Object.assign(Object.assign({}, params === null || params === void 0 ? void 0 : params.fields), { name: {
                    contains: (_a = params === null || params === void 0 ? void 0 : params.fields) === null || _a === void 0 ? void 0 : _a.name
                } }), orderBy: params === null || params === void 0 ? void 0 : params.sort }, (0, paging_1.default)(params === null || params === void 0 ? void 0 : params.paging))).catch(err => {
            console.log(err);
            throw new Error('error getting transporters list from database');
        });
        if (transporters) {
            return {
                transporters,
                total: transporters.length,
                sort: params === null || params === void 0 ? void 0 : params.sort,
                paging: params === null || params === void 0 ? void 0 : params.paging
            };
        }
    }
    async find(params) {
        const transporter = await prismaClient_1.prismaClient.transporter.findFirst({
            where: params,
        }).catch(err => {
            throw new Error('error getting transporter list from database');
        });
        return transporter;
    }
    async save(transporter) {
        const created = await prismaClient_1.prismaClient.transporter.create({
            data: transporter
        }).catch(err => {
            console.log(err);
            throw new Error('error creating new transporter in database');
        });
        if (created) {
            return { id: created.id };
        }
    }
    async update(transporter, id) {
        const updated = await prismaClient_1.prismaClient.transporter.update({
            data: transporter,
            where: { id }
        }).catch(err => {
            console.log(err);
            throw new Error('error updating transporter in database');
        });
        if (updated) {
            return;
        }
    }
    async delete(id) {
        const deleted = await prismaClient_1.prismaClient.transporter.delete({
            where: { id }
        }).catch(err => {
            console.log(err);
            throw new Error('error deleting transporter in database');
        });
        if (deleted) {
            return;
        }
    }
}
exports.PrismaTransporterRepository = PrismaTransporterRepository;
