"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindCustomerAddressDataValidate = void 0;
class FindCustomerAddressDataValidate {
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
exports.FindCustomerAddressDataValidate = FindCustomerAddressDataValidate;
