"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindCustomerUseCase = void 0;
class FindCustomerUseCase {
    constructor(findCustomerDataValidate, customersRepository) {
        this.findCustomerDataValidate = findCustomerDataValidate;
        this.customersRepository = customersRepository;
    }
    async execute(data) {
        try {
            this.findCustomerDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const customer = await this.customersRepository.find(data)
            .catch(err => { throw new Error(err); });
        if (customer) {
            return customer;
        }
    }
}
exports.FindCustomerUseCase = FindCustomerUseCase;
