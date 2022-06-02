"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderInvoiceDataValidate = void 0;
const notIncludesTheKeys_1 = require("../../../../services/dataValidate/notIncludesTheKeys");
class UpdateOrderInvoiceDataValidate {
    execute(data) {
        const id = data.id;
        if (typeof id != 'number') {
            throw new Error('missing invoice id in the body');
        }
        const invoice = data.invoice;
        if (typeof invoice == 'undefined') {
            throw new Error('missing invoice data in the body');
        }
        const availableFields = ['cnpj', 'number', 'key', 'link'];
        (0, notIncludesTheKeys_1.notIncludesTheKeys)(availableFields, invoice);
        // cnpj
        if (typeof invoice.cnpj != 'undefined') {
            if (typeof invoice.cnpj != 'string') {
                throw new Error('missing invoice cnpj is not a number');
            }
            if (invoice.cnpj.length == 0) {
                throw new Error('the invoice cnpj cant be empty');
            }
            data.invoice.cnpj = data.invoice.cnpj.replace(/[^A-Z0-9]+/ig, "");
        }
        // number
        if (typeof invoice.number != 'undefined') {
            if (typeof invoice.number != 'number') {
                throw new Error('invoice number is not a number');
            }
        }
        // key
        if (typeof invoice.key != 'undefined') {
            if (typeof invoice.key != 'string') {
                throw new Error('missing invoice key is not a number');
            }
            if (invoice.key.length == 0) {
                throw new Error('the invoice key cant be empty');
            }
        }
        // link 
        if (typeof invoice.link != 'undefined') {
            if (typeof invoice.link != 'string') {
                throw new Error('missing invoice link is not a number');
            }
            if (invoice.link.length == 0) {
                throw new Error('the invoice link cant be empty');
            }
        }
    }
}
exports.UpdateOrderInvoiceDataValidate = UpdateOrderInvoiceDataValidate;
