"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCustomerAddressController = void 0;
class UpdateCustomerAddressController {
    constructor(updateCustomerAddressUseCase) {
        this.updateCustomerAddressUseCase = updateCustomerAddressUseCase;
    }
    async handle(request, response) {
        const { body } = request;
        try {
            const updated = await this.updateCustomerAddressUseCase.execute(body);
            response.status(201).json({
                message: `the Customer Address ${updated.id} updated with success`,
                updated,
            });
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            });
        }
    }
}
exports.UpdateCustomerAddressController = UpdateCustomerAddressController;
