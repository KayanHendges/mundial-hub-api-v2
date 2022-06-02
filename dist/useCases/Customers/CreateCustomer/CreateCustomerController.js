"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomerController = void 0;
class CreateCustomerController {
    constructor(createCustomerUseCase) {
        this.createCustomerUseCase = createCustomerUseCase;
    }
    async handle(request, response) {
        const { body } = request;
        try {
            const customerId = await this.createCustomerUseCase.execute(body);
            response.status(201).json({
                customerId
            });
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            });
        }
    }
}
exports.CreateCustomerController = CreateCustomerController;
