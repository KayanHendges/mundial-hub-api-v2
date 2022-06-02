"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCustomersUseCase = void 0;
class ListCustomersUseCase {
    constructor(listCustomersDateValidate, customersRepository) {
        this.listCustomersDateValidate = listCustomersDateValidate;
        this.customersRepository = customersRepository;
    }
    async execute(data) {
        try {
            this.listCustomersDateValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const customersList = await this.customersRepository.list(data)
            .catch(err => { throw new Error(err); });
        if (customersList) {
            return customersList;
        }
    }
}
exports.ListCustomersUseCase = ListCustomersUseCase;
