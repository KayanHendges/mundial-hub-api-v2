"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderProductSoldController = void 0;
class CreateOrderProductSoldController {
    constructor(createOrderProductSoldUseCase) {
        this.createOrderProductSoldUseCase = createOrderProductSoldUseCase;
    }
    async handle(request, response) {
        const { body } = request;
        try {
            const { createdId } = await this.createOrderProductSoldUseCase.execute(body);
            response.status(201).json({ createdId });
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            });
        }
    }
}
exports.CreateOrderProductSoldController = CreateOrderProductSoldController;
