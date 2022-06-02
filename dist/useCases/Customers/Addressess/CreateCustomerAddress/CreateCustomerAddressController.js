"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomerAddressController = void 0;
class CreateCustomerAddressController {
    constructor(createCustomerAddressUseCase) {
        this.createCustomerAddressUseCase = createCustomerAddressUseCase;
    }
    async handle(request, response) {
        const { body } = request;
        try {
            const created = await this.createCustomerAddressUseCase.execute(body);
            response.status(201).json(created);
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            });
        }
    }
}
exports.CreateCustomerAddressController = CreateCustomerAddressController;
