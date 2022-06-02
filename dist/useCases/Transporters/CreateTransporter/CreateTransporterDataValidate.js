"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTransporterDataValidate = void 0;
const notIncludesTheKeys_1 = require("../../../services/dataValidate/notIncludesTheKeys");
class CreateTransporterDataValidate {
    execute(data) {
        if (typeof data == 'undefined') {
            throw new Error('missing transporter data in the body');
        }
        const availableFields = ['externalId', 'name', 'ssw', 'trackingLink'];
        (0, notIncludesTheKeys_1.notIncludesTheKeys)(availableFields, data);
        // number
        if (typeof data.externalId != 'number') {
            throw new Error('missing transporter externalId in the body or is not a number');
        }
        // name
        if (typeof data.name != 'string') {
            throw new Error('missing transporter name in the body');
        }
        if (data.name.length == 0) {
            throw new Error('the transporter name cant be empty');
        }
        // ssw
        if (typeof data.ssw != 'boolean') {
            throw new Error('missing the ssw or its not a boolean');
        }
    }
}
exports.CreateTransporterDataValidate = CreateTransporterDataValidate;
