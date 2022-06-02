"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindCustomerAddressUseCase = void 0;
class FindCustomerAddressUseCase {
    constructor(findCustomerAddressDataValidate, customersAddressesRepository) {
        this.findCustomerAddressDataValidate = findCustomerAddressDataValidate;
        this.customersAddressesRepository = customersAddressesRepository;
    }
    async execute(data) {
        try {
            this.findCustomerAddressDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const { id } = data;
        const customerAddress = await this.customersAddressesRepository.find({ id })
            .catch(err => { throw new Error(err); });
        if (customerAddress) {
            return customerAddress;
        }
    }
}
exports.FindCustomerAddressUseCase = FindCustomerAddressUseCase;
