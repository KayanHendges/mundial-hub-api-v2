"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListOrdersInvoicesController = void 0;
class ListOrdersInvoicesController {
    constructor(listOrdersInvoicesUseCase) {
        this.listOrdersInvoicesUseCase = listOrdersInvoicesUseCase;
    }
    async handle(request, response) {
        const { body } = request;
        try {
            const ordersInvoices = await this.listOrdersInvoicesUseCase.execute(body);
            response.status(201).json(ordersInvoices);
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            });
        }
    }
}
exports.ListOrdersInvoicesController = ListOrdersInvoicesController;
