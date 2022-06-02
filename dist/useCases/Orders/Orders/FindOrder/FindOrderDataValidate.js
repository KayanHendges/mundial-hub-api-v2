"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindOrderDataValidate = void 0;
class FindOrderDataValidate {
    execute(data) {
        const id = data === null || data === void 0 ? void 0 : data.id;
        if (typeof id != 'number') {
            throw new Error('missing id in the body');
        }
        return;
    }
}
exports.FindOrderDataValidate = FindOrderDataValidate;
