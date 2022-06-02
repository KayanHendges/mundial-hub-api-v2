"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindOrderInvoiceController = void 0;
class FindOrderInvoiceController {
    constructor(findOrderInvoiceUseCase) {
        this.findOrderInvoiceUseCase = findOrderInvoiceUseCase;
    }
    async handle(request, response) {
        const { body } = request;
        try {
            const invoice = await this.findOrderInvoiceUseCase.execute(body);
            response.status(201).json({ invoice });
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            });
        }
    }
}
exports.FindOrderInvoiceController = FindOrderInvoiceController;
