"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomerAddressUseCase = void 0;
class CreateCustomerAddressUseCase {
    constructor(createCustomerAddressDataValidate, customerAddressRepository) {
        this.createCustomerAddressDataValidate = createCustomerAddressDataValidate;
        this.customerAddressRepository = customerAddressRepository;
    }
    async execute(data) {
        try {
            this.createCustomerAddressDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const { address } = data;
        const customerAddressCreated = await this.customerAddressRepository.save(address)
            .catch(err => { throw new Error(err); });
        if (customerAddressCreated) {
            return { customerAddress: customerAddressCreated.id };
        }
    }
}
exports.CreateCustomerAddressUseCase = CreateCustomerAddressUseCase;
