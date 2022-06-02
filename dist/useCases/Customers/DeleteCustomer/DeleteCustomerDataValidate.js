"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCustomerDataValidate = void 0;
class DeleteCustomerDataValidate {
    execute(data) {
        if (typeof data == undefined) {
            throw new Error('missing customer id');
        }
        if (isNaN(data.id)) {
            throw new Error('the customer id is not a number');
        }
        if (typeof data.id != 'number') {
            throw new Error('the customer id is not a number');
        }
        return;
    }
}
exports.DeleteCustomerDataValidate = DeleteCustomerDataValidate;
