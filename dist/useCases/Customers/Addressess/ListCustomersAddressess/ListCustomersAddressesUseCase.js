"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCustomersAddressesUseCase = void 0;
class ListCustomersAddressesUseCase {
    constructor(listCustomersAddressesDataValidate, customersAddressesRepository) {
        this.listCustomersAddressesDataValidate = listCustomersAddressesDataValidate;
        this.customersAddressesRepository = customersAddressesRepository;
    }
    async execute(data) {
        try {
            this.listCustomersAddressesDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const { sort, paging, addresses: customersAddresses } = data;
        const addressesList = await this.customersAddressesRepository.list({ customersAddresses, sort, paging })
            .catch(err => { throw new Error(err); });
        if (addressesList) {
            return addressesList;
        }
    }
}
exports.ListCustomersAddressesUseCase = ListCustomersAddressesUseCase;
