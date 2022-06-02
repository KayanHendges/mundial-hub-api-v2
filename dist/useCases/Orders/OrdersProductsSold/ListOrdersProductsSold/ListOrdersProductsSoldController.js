"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListOrdersProductsSoldController = void 0;
class ListOrdersProductsSoldController {
    constructor(listOrdersProductsSoldUseCase) {
        this.listOrdersProductsSoldUseCase = listOrdersProductsSoldUseCase;
    }
    async handle(request, response) {
        const { body } = request;
        try {
            const products = await this.listOrdersProductsSoldUseCase.execute(body);
            response.status(201).json(products);
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            });
        }
    }
}
exports.ListOrdersProductsSoldController = ListOrdersProductsSoldController;
