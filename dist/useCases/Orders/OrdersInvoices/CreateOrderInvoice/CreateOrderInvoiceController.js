"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderInvoiceController = void 0;
class CreateOrderInvoiceController {
    constructor(createOrderInvoiceUseCase) {
        this.createOrderInvoiceUseCase = createOrderInvoiceUseCase;
    }
    async handle(request, response) {
        const { body } = request;
        try {
            const { createdId } = await this.createOrderInvoiceUseCase.execute(body);
            response.status(201).json({ createdId });
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            });
        }
    }
}
exports.CreateOrderInvoiceController = CreateOrderInvoiceController;
