"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCustomersController = void 0;
class ListCustomersController {
    constructor(listCustomersUseCase) {
        this.listCustomersUseCase = listCustomersUseCase;
    }
    async handle(request, response) {
        const { body } = request;
        try {
            const customers = await this.listCustomersUseCase.execute(body);
            response.status(201).json(customers);
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            });
        }
    }
}
exports.ListCustomersController = ListCustomersController;
