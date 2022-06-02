"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindOrderFinanceController = void 0;
class FindOrderFinanceController {
    constructor(findOrderFinanceUseCase) {
        this.findOrderFinanceUseCase = findOrderFinanceUseCase;
    }
    async handle(request, response) {
        const { body } = request;
        try {
            const finance = await this.findOrderFinanceUseCase.execute(body);
            response.status(201).json({ finance });
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            });
        }
    }
}
exports.FindOrderFinanceController = FindOrderFinanceController;
