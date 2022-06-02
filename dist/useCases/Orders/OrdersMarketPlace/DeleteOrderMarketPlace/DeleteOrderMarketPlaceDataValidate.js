"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOrderMarketPlaceDataValidate = void 0;
class DeleteOrderMarketPlaceDataValidate {
    execute(data) {
        const { id } = data;
        if (typeof id != 'number') {
            throw new Error('missing id in the body');
        }
        return;
    }
}
exports.DeleteOrderMarketPlaceDataValidate = DeleteOrderMarketPlaceDataValidate;
