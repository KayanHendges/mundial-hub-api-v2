"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindOrderProductSoldController = void 0;
class FindOrderProductSoldController {
    constructor(findOrderProductSoldUseCase) {
        this.findOrderProductSoldUseCase = findOrderProductSoldUseCase;
    }
    async handle(request, response) {
        const { body } = request;
        try {
            const productSold = await this.findOrderProductSoldUseCase.execute(body);
            response.status(201).json({ productSold });
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            });
        }
    }
}
exports.FindOrderProductSoldController = FindOrderProductSoldController;
