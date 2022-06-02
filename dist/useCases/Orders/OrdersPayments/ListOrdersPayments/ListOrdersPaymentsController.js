"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListOrdersPaymentsController = void 0;
class ListOrdersPaymentsController {
    constructor(listOrdersPaymentsUseCase) {
        this.listOrdersPaymentsUseCase = listOrdersPaymentsUseCase;
    }
    async handle(request, response) {
        const { body } = request;
        try {
            const ordersPayments = await this.listOrdersPaymentsUseCase.execute(body);
            response.status(201).json(ordersPayments);
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            });
        }
    }
}
exports.ListOrdersPaymentsController = ListOrdersPaymentsController;
