"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindOrderMarketPlaceDataValidate = void 0;
class FindOrderMarketPlaceDataValidate {
    execute(data) {
        const id = data === null || data === void 0 ? void 0 : data.id;
        const orderId = data === null || data === void 0 ? void 0 : data.orderId;
        // at least id or orderId
        if (typeof id != 'number' && typeof orderId != 'number') {
            throw new Error('at least id or orderId is required');
        }
        // id
        if (typeof id != 'undefined') {
            if (typeof id != 'number') {
                throw new Error('missing id is not a number');
            }
        }
        // orderId
        if (typeof orderId != 'undefined') {
            if (typeof orderId != 'number') {
                throw new Error('missing orderId is not a number');
            }
        }
        return;
    }
}
exports.FindOrderMarketPlaceDataValidate = FindOrderMarketPlaceDataValidate;
