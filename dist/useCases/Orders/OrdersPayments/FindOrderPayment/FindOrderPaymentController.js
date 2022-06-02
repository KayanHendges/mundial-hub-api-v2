"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindOrderPaymentController = void 0;
class FindOrderPaymentController {
    constructor(findOrderPaymentUseCase) {
        this.findOrderPaymentUseCase = findOrderPaymentUseCase;
    }
    async handle(request, response) {
        const { body } = request;
        try {
            const payment = await this.findOrderPaymentUseCase.execute(body);
            response.status(201).json({ payment });
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            });
        }
    }
}
exports.FindOrderPaymentController = FindOrderPaymentController;
