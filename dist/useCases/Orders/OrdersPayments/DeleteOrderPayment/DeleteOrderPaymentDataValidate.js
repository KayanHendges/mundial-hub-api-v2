"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOrderPaymentDataValidate = void 0;
class DeleteOrderPaymentDataValidate {
    execute(data) {
        const id = data.id;
        if (typeof id != 'number') {
            throw new Error('missing id in the body');
        }
        return;
    }
}
exports.DeleteOrderPaymentDataValidate = DeleteOrderPaymentDataValidate;