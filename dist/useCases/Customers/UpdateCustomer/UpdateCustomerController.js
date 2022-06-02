"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCustomerController = void 0;
class UpdateCustomerController {
    constructor(updateCustomerUseCase) {
        this.updateCustomerUseCase = updateCustomerUseCase;
    }
    async handle(request, response) {
        const { body } = request;
        try {
            const updatedCustomer = await this.updateCustomerUseCase.execute(body);
            response.status(201).json({
                customerId: updatedCustomer.id,
                message: `customer ${updatedCustomer.name} (${updatedCustomer.id}) updated with success`,
                customer: updatedCustomer
            });
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            });
        }
    }
}
exports.UpdateCustomerController = UpdateCustomerController;
