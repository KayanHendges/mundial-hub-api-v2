"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindOrderInvoiceUseCase = void 0;
class FindOrderInvoiceUseCase {
    constructor(findOrderInvoiceDataValidate, ordersInvoicesRepository) {
        this.findOrderInvoiceDataValidate = findOrderInvoiceDataValidate;
        this.ordersInvoicesRepository = ordersInvoicesRepository;
    }
    async execute(data) {
        try {
            await this.findOrderInvoiceDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const { id } = data;
        const invoice = await this.ordersInvoicesRepository.find({ id })
            .catch(err => { throw new Error(err); });
        if (!invoice) {
            throw new Error(`no order invoice with id ${id}`);
        }
        return invoice;
    }
}
exports.FindOrderInvoiceUseCase = FindOrderInvoiceUseCase;
