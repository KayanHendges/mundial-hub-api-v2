"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function pagingToPrisma(paging) {
    if (!paging) {
        return undefined;
    }
    const page = paging === null || paging === void 0 ? void 0 : paging.page;
    const limit = paging === null || paging === void 0 ? void 0 : paging.limit;
    if (!limit) {
        return undefined;
    }
    if (!page) {
        return {
            take: limit,
            skip: 0
        };
    }
    const skip = (page - 1) * limit;
    const take = limit;
    return {
        skip,
        take,
    };
}
exports.default = pagingToPrisma;
