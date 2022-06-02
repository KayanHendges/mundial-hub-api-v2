"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindCustomerAddressController = void 0;
class FindCustomerAddressController {
    constructor(findCustomerAddressUseCase) {
        this.findCustomerAddressUseCase = findCustomerAddressUseCase;
    }
    async handle(request, response) {
        const { body } = request;
        try {
            const address = await this.findCustomerAddressUseCase.execute(body);
            response.status(201).json({ address });
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            });
        }
    }
}
exports.FindCustomerAddressController = FindCustomerAddressController;
