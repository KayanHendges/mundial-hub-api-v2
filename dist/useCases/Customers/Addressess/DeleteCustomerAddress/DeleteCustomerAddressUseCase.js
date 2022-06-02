"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCustomerAddressUseCase = void 0;
class DeleteCustomerAddressUseCase {
    constructor(deleteCustomerAddressDataValidate, customersAddressesRepository) {
        this.deleteCustomerAddressDataValidate = deleteCustomerAddressDataValidate;
        this.customersAddressesRepository = customersAddressesRepository;
    }
    async execute(data) {
        try {
            this.deleteCustomerAddressDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const { id } = data;
        const deletedId = await this.customersAddressesRepository.delete(id)
            .catch(err => { throw new Error(err); });
        if (deletedId) {
            return { deletedId };
        }
    }
}
exports.DeleteCustomerAddressUseCase = DeleteCustomerAddressUseCase;
