"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOrderFinanceDataValidate = void 0;
class DeleteOrderFinanceDataValidate {
    execute(data) {
        const id = data.id;
        if (typeof id != 'number') {
            throw new Error('missing id in the body');
        }
        return;
    }
}
exports.DeleteOrderFinanceDataValidate = DeleteOrderFinanceDataValidate;
