"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderInvoiceController = void 0;
class UpdateOrderInvoiceController {
    constructor(updateOrderInvoiceUseCase) {
        this.updateOrderInvoiceUseCase = updateOrderInvoiceUseCase;
    }
    async handle(request, response) {
        const { body } = request;
        try {
            const updated = await this.updateOrderInvoiceUseCase.execute(body);
            response.status(201).json({
                message: `order invoice with id ${updated.id} updated with success`,
                updated
            });
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            });
        }
    }
}
exports.UpdateOrderInvoiceController = UpdateOrderInvoiceController;
