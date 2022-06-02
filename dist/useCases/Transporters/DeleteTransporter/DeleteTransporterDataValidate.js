"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTransporterDateValidate = void 0;
class DeleteTransporterDateValidate {
    execute(data) {
        if (typeof data == undefined) {
            throw new Error('missing transporter id');
        }
        if (isNaN(data.id)) {
            throw new Error('the transporter id is not a number');
        }
        if (typeof data.id != 'number') {
            throw new Error('the transporter id is not a number');
        }
        return;
    }
}
exports.DeleteTransporterDateValidate = DeleteTransporterDateValidate;
