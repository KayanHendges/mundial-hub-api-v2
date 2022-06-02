"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListOrdersController = void 0;
class ListOrdersController {
    constructor(listOrdersUseCase) {
        this.listOrdersUseCase = listOrdersUseCase;
    }
    async handle(request, response) {
        const { body } = request;
        try {
            const orders = await this.listOrdersUseCase.execute(body);
            response.status(201).json(orders);
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            });
        }
    }
}
exports.ListOrdersController = ListOrdersController;
