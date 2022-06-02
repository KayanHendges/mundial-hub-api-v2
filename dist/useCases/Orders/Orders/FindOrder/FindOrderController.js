"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindOrderController = void 0;
class FindOrderController {
    constructor(findOrderUseCase) {
        this.findOrderUseCase = findOrderUseCase;
    }
    async handle(request, response) {
        const { body } = request;
        try {
            const order = await this.findOrderUseCase.execute(body);
            response.status(201).json({ order });
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            });
        }
    }
}
exports.FindOrderController = FindOrderController;
