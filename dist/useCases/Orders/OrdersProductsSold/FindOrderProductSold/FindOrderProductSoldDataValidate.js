"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindOrderProductSoldDataValidate = void 0;
class FindOrderProductSoldDataValidate {
    execute(data) {
        const id = data.id;
        if (typeof id != 'number') {
            throw new Error('missing id in the body');
        }
        return;
    }
}
exports.FindOrderProductSoldDataValidate = FindOrderProductSoldDataValidate;
