"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindOrderFinanceDataValidate = void 0;
class FindOrderFinanceDataValidate {
    execute(data) {
        const id = data.id;
        if (typeof id != 'number') {
            throw new Error('missing id in the body');
        }
        return;
    }
}
exports.FindOrderFinanceDataValidate = FindOrderFinanceDataValidate;
