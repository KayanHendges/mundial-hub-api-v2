"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderFinanceDataValidate = void 0;
const date_fns_1 = require("date-fns");
const notIncludesTheKeys_1 = require("../../../../services/dataValidate/notIncludesTheKeys");
class CreateOrderFinanceDataValidate {
    execute(data) {
        const finance = data.finance;
        if (typeof finance == 'undefined') {
            throw new Error('missing finance data in the body');
        }
        const availableFields = ['orderId', 'type', 'value', 'date', 'applied'];
        (0, notIncludesTheKeys_1.notIncludesTheKeys)(availableFields, finance);
        //orderId
        if (typeof finance.orderId != 'number') {
            throw new Error('missing finance orderId in the body');
        }
        // type
        if (typeof finance.type != 'string') {
            throw new Error('missing finance type in the body');
        }
        if (finance.type.length == 0) {
            throw new Error('the finance type cant be empty');
        }
        // value 
        if (typeof finance.value != 'number') {
            throw new Error('missing finance value in the body');
        }
        // date
        if (typeof finance.date != 'object' && typeof finance.date != 'string') {
            throw new Error('missing finance.date data in the body');
        }
        if (typeof finance.date == 'string') {
            try {
                data.finance.date = (0, date_fns_1.addHours)((0, date_fns_1.parseISO)(finance.date), -3);
            }
            catch (err) {
                throw new Error(`failed to parse the finance date. date-fns error: ${err}`);
            }
        }
        if (typeof finance.date == 'object') {
            if (!(0, date_fns_1.isValid)(finance.date)) {
                throw new Error('the finance date is a wrong format');
            }
        }
        // applied
        if (typeof finance.applied != 'boolean') {
            throw new Error('missing finance applied in the body');
        }
        return;
    }
}
exports.CreateOrderFinanceDataValidate = CreateOrderFinanceDataValidate;
