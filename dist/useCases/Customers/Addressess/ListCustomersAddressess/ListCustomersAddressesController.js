"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCustomersAddressesController = void 0;
class ListCustomersAddressesController {
    constructor(listCustomersAddressesUseCase) {
        this.listCustomersAddressesUseCase = listCustomersAddressesUseCase;
    }
    async handle(request, response) {
        const { body } = request;
        try {
            const addresses = await this.listCustomersAddressesUseCase.execute(body);
            response.status(201).json(addresses);
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            });
        }
    }
}
exports.ListCustomersAddressesController = ListCustomersAddressesController;
