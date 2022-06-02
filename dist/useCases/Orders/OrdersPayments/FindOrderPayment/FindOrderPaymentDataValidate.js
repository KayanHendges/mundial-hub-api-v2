"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindOrderPaymentDataValidate = void 0;
class FindOrderPaymentDataValidate {
    execute(data) {
        const id = data.id;
        if (typeof id != 'number') {
            throw new Error('missing id in the body');
        }
        return;
    }
}
exports.FindOrderPaymentDataValidate = FindOrderPaymentDataValidate;
