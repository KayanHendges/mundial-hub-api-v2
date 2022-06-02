"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderFinanceController = void 0;
class CreateOrderFinanceController {
    constructor(createOrderFinanceUseCase) {
        this.createOrderFinanceUseCase = createOrderFinanceUseCase;
    }
    async handle(request, response) {
        const { body } = request;
        try {
            const { createdId } = await this.createOrderFinanceUseCase.execute(body);
            response.status(201).json({ createdId });
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            });
        }
    }
}
exports.CreateOrderFinanceController = CreateOrderFinanceController;
