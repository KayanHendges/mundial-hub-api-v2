"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOrderProductSoldDataValidate = void 0;
class DeleteOrderProductSoldDataValidate {
    execute(data) {
        const id = data.id;
        if (typeof id != 'number') {
            throw new Error('missing id in the body');
        }
        return;
    }
}
exports.DeleteOrderProductSoldDataValidate = DeleteOrderProductSoldDataValidate;
