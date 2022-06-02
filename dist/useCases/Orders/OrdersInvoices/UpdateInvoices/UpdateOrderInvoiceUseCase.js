"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderInvoiceUseCase = void 0;
class UpdateOrderInvoiceUseCase {
    constructor(updateOrderInvoiceDataValidate, ordersInvoicesRepository) {
        this.updateOrderInvoiceDataValidate = updateOrderInvoiceDataValidate;
        this.ordersInvoicesRepository = ordersInvoicesRepository;
    }
    async execute(data) {
        try {
            await this.updateOrderInvoiceDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const { invoice, id } = data;
        const updated = await this.ordersInvoicesRepository.update(invoice, id)
            .catch(err => { throw new Error(err); });
        if (updated) {
            return updated;
        }
    }
}
exports.UpdateOrderInvoiceUseCase = UpdateOrderInvoiceUseCase;
