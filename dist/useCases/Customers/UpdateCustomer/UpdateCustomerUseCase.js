"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCustomerUseCase = void 0;
class UpdateCustomerUseCase {
    constructor(updateCustomerDataValidate, customerRepository) {
        this.updateCustomerDataValidate = updateCustomerDataValidate;
        this.customerRepository = customerRepository;
    }
    async execute(data) {
        try {
            this.updateCustomerDataValidate.execute(data);
        }
        catch (err) {
            console.log(err);
            throw new Error(err);
        }
        const { id } = data;
        const { customer } = data;
        const updatedCustomer = await this.customerRepository.update(customer, id)
            .catch(err => { throw new Error(err); });
        if (updatedCustomer) {
            return updatedCustomer;
        }
    }
}
exports.UpdateCustomerUseCase = UpdateCustomerUseCase;
