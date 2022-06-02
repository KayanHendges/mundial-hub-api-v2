"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderProductSoldController = void 0;
class UpdateOrderProductSoldController {
    constructor(updateOrderProductSoldUseCase) {
        this.updateOrderProductSoldUseCase = updateOrderProductSoldUseCase;
    }
    async handle(request, response) {
        const { body } = request;
        try {
            const updated = await this.updateOrderProductSoldUseCase.execute(body);
            response.status(201).json({
                message: `the product sold with id ${updated.id} updated with success`,
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
exports.UpdateOrderProductSoldController = UpdateOrderProductSoldController;
