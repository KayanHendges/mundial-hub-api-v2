"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderMarketPlaceController = void 0;
class UpdateOrderMarketPlaceController {
    constructor(updateOrderMarketPlaceUseCase) {
        this.updateOrderMarketPlaceUseCase = updateOrderMarketPlaceUseCase;
    }
    async handle(request, response) {
        const { body } = request;
        try {
            const { updated } = await this.updateOrderMarketPlaceUseCase.execute(body);
            response.status(201).json({
                message: `the order marketplace with id ${updated.id}`,
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
exports.UpdateOrderMarketPlaceController = UpdateOrderMarketPlaceController;
