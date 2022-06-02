"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCustomerUseCase = void 0;
class DeleteCustomerUseCase {
    constructor(deleteCustomerDataValidate, customerRepository) {
        this.deleteCustomerDataValidate = deleteCustomerDataValidate;
        this.customerRepository = customerRepository;
    }
    async execute(data) {
        try {
            this.deleteCustomerDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const { id } = data;
        const deleted = await this.customerRepository.delete(id)
            .catch(err => { throw new Error(err); });
        return { deletedId: id };
    }
}
exports.DeleteCustomerUseCase = DeleteCustomerUseCase;
