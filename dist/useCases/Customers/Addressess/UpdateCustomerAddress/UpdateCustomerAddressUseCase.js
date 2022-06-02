"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCustomerAddressUseCase = void 0;
class UpdateCustomerAddressUseCase {
    constructor(updateCustomerAddressDataValidate, customersAddressesRepository) {
        this.updateCustomerAddressDataValidate = updateCustomerAddressDataValidate;
        this.customersAddressesRepository = customersAddressesRepository;
    }
    async execute(data) {
        try {
            this.updateCustomerAddressDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const { id } = data;
        const { address } = data;
        const updated = await this.customersAddressesRepository.update(address, id)
            .catch(err => { throw new Error(err); });
        if (updated) {
            return updated;
        }
    }
}
exports.UpdateCustomerAddressUseCase = UpdateCustomerAddressUseCase;
