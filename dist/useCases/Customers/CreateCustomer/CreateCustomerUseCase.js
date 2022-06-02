"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomerUseCase = void 0;
class CreateCustomerUseCase {
    constructor(createCustomerDataValidate, customerRepository) {
        this.createCustomerDataValidate = createCustomerDataValidate;
        this.customerRepository = customerRepository;
    }
    async execute(data) {
        try {
            this.createCustomerDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const { customer } = data;
        const { email } = customer;
        const customerAlreayExist = await this.customerRepository.find({ email });
        if (customerAlreayExist) {
            throw new Error('customer already exists');
        }
        const { id } = await this.customerRepository.save(customer)
            .catch(err => { throw new Error(err); });
        if (id) {
            return id;
        }
    }
}
exports.CreateCustomerUseCase = CreateCustomerUseCase;
