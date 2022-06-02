"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderFinanceController = void 0;
class UpdateOrderFinanceController {
    constructor(updateOrderFinanceUseCase) {
        this.updateOrderFinanceUseCase = updateOrderFinanceUseCase;
    }
    async handle(request, response) {
        const { body } = request;
        try {
            const { updated } = await this.updateOrderFinanceUseCase.execute(body);
            response.status(201).json({
                message: `order finance with id ${updated.id} updated with success`,
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
exports.UpdateOrderFinanceController = UpdateOrderFinanceController;
