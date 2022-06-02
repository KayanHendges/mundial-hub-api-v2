"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindCustomerDataValidate = void 0;
class FindCustomerDataValidate {
    execute(data) {
        let atLeastOneParameter = false;
        Object.keys(data).map(key => {
            if (['id', 'email', 'name', 'cpf', 'cnpj'].includes(key)) {
                atLeastOneParameter = true;
            }
        });
        if (!atLeastOneParameter) {
            throw new Error('missing customer parameter');
        }
        return;
    }
}
exports.FindCustomerDataValidate = FindCustomerDataValidate;
