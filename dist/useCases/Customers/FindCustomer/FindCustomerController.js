"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindCustomerController = void 0;
class FindCustomerController {
    constructor(findCustomerUseCase) {
        this.findCustomerUseCase = findCustomerUseCase;
    }
    async handle(request, response) {
        const { body } = request;
        try {
            const customer = await this.findCustomerUseCase.execute(body);
            response.status(201).json({ customer });
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            });
        }
    }
}
exports.FindCustomerController = FindCustomerController;
