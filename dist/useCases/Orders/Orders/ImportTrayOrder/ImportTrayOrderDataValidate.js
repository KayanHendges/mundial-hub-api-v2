"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportTrayOrderDataValidate = void 0;
class ImportTrayOrderDataValidate {
    execute(data) {
        const id = data === null || data === void 0 ? void 0 : data.id;
        const storeCode = data === null || data === void 0 ? void 0 : data.storeCode;
        // id
        if (typeof id != 'number') {
            throw new Error('missing id in the body');
        }
        // storeCode
        if (typeof storeCode != 'number') {
            throw new Error('missing storeCode in the body');
        }
        return;
    }
}
exports.ImportTrayOrderDataValidate = ImportTrayOrderDataValidate;
