"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTrayOrdersDataValidate = void 0;
class ListTrayOrdersDataValidate {
    execute(data) {
        const { storeCode, includeImported, page, limit } = data;
        if (typeof storeCode != 'number') {
            throw new Error('missing storeCode in the body');
        }
        if (storeCode == 0) {
            throw new Error('missing storeCode in the body');
        }
        if (typeof page != 'number') {
            data.page = 1;
        }
        if (typeof limit != 'number') {
            data.limit = 50;
        }
        if (typeof includeImported != 'boolean') {
            data.includeImported = false;
        }
        return;
    }
}
exports.ListTrayOrdersDataValidate = ListTrayOrdersDataValidate;
