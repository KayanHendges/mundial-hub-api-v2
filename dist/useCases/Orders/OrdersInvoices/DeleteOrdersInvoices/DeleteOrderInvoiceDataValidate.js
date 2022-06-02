"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOrderInvoiceDataValidate = void 0;
class DeleteOrderInvoiceDataValidate {
    execute(data) {
        const id = data.id;
        if (typeof id != 'number') {
            throw new Error('missing id in the body');
        }
        return;
    }
}
exports.DeleteOrderInvoiceDataValidate = DeleteOrderInvoiceDataValidate;
