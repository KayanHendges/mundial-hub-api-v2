"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCustomerAddressDataValidate = void 0;
class DeleteCustomerAddressDataValidate {
    execute(data) {
        if (typeof data == 'undefined') {
            throw new Error('missing parameters in the body');
        }
        if (typeof data.id != 'number') {
            throw new Error('missing data id in the body');
        }
        return;
    }
}
exports.DeleteCustomerAddressDataValidate = DeleteCustomerAddressDataValidate;
