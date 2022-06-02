"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTransporterDataValidate = void 0;
const notIncludesTheKeys_1 = require("../../../services/dataValidate/notIncludesTheKeys");
class UpdateTransporterDataValidate {
    execute(data) {
        if (typeof data == 'undefined') {
            throw new Error('missing transporter data in the body');
        }
        if (typeof (data === null || data === void 0 ? void 0 : data.id) != 'number') {
            throw new Error('missing transporter id in the body');
        }
        const transporter = data === null || data === void 0 ? void 0 : data.transporter;
        if (typeof transporter == 'undefined') {
            throw new Error('missing transporter in the body');
        }
        const availableFields = ['externalId', 'name', 'ssw', 'trackingLink'];
        (0, notIncludesTheKeys_1.notIncludesTheKeys)(availableFields, transporter);
        // number
        if (typeof transporter.externalId != 'undefined' && typeof transporter.externalId != 'number') {
            throw new Error('the externalId is not a number');
        }
        // name
        if (typeof transporter.name != 'undefined') {
            if (typeof transporter.name != 'string') {
                throw new Error('the transporter name is not a string');
            }
            if (transporter.name.length == 0) {
                throw new Error('the transporter name cant be empty');
            }
        }
        // ssw
        if (typeof transporter.externalId != 'undefined' && typeof transporter.externalId != 'boolean') {
            throw new Error('the ssw is not a boolean');
        }
    }
}
exports.UpdateTransporterDataValidate = UpdateTransporterDataValidate;
