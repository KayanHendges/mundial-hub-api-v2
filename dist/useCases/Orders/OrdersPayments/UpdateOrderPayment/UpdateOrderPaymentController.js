"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderPaymentController = void 0;
class UpdateOrderPaymentController {
    constructor(updateOrderPaymentUseCase) {
        this.updateOrderPaymentUseCase = updateOrderPaymentUseCase;
    }
    async handle(request, response) {
        const { body } = request;
        try {
            const updated = await this.updateOrderPaymentUseCase.execute(body);
            response.status(201).json({
                message: `order payment ${updated.id} updated with success`,
                updated
            });
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            });
        }
    }
}
exports.UpdateOrderPaymentController = UpdateOrderPaymentController;
