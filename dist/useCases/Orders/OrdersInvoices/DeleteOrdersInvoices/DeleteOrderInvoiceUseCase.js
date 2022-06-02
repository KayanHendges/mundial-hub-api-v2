"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOrderInvoiceUseCase = void 0;
class DeleteOrderInvoiceUseCase {
    constructor(deleteOrderInvoiceDataValidate, ordersInvoicesRepository) {
        this.deleteOrderInvoiceDataValidate = deleteOrderInvoiceDataValidate;
        this.ordersInvoicesRepository = ordersInvoicesRepository;
    }
    async execute(data) {
        try {
            await this.deleteOrderInvoiceDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const { id } = data;
        const deletedId = await this.ordersInvoicesRepository.delete({ id })
            .catch(err => { throw new Error(err); });
        if (deletedId) {
            return { deletedId };
        }
        return;
    }
}
exports.DeleteOrderInvoiceUseCase = DeleteOrderInvoiceUseCase;
