"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOrderController = void 0;
class GetOrderController {
    constructor(getOrderUseCase) {
        this.getOrderUseCase = getOrderUseCase;
    }
    async handle(request, response) {
        const { order_id, store_code } = request.query;
        try {
            const order = await this.getOrderUseCase.execute({
                order_id: order_id,
                store_code: store_code
            });
            return response.status(200).json({ order });
        }
        catch (err) {
            console.log(err);
            return response.status(400).json({
                message: err.message || 'unexpected error'
            });
        }
    }
}
exports.GetOrderController = GetOrderController;
