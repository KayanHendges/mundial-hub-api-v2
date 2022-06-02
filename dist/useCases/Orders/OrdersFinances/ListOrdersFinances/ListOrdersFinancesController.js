"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListOrdersFinancesController = void 0;
class ListOrdersFinancesController {
    constructor(listOrdersFinancesUseCase) {
        this.listOrdersFinancesUseCase = listOrdersFinancesUseCase;
    }
    async handle(request, response) {
        const { body } = request;
        try {
            const finances = await this.listOrdersFinancesUseCase.execute(body);
            response.status(201).json(finances);
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            });
        }
    }
}
exports.ListOrdersFinancesController = ListOrdersFinancesController;
