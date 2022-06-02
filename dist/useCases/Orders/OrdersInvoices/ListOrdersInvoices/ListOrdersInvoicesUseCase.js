"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListOrdersInvoicesUseCase = void 0;
class ListOrdersInvoicesUseCase {
    constructor(listOrdersInvoicesDataValidate, ordersInvoicesRepository) {
        this.listOrdersInvoicesDataValidate = listOrdersInvoicesDataValidate;
        this.ordersInvoicesRepository = ordersInvoicesRepository;
    }
    async execute(data) {
        try {
            await this.listOrdersInvoicesDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const { ordersInvoices: fields, paging, sort } = data;
        const ordersInvoices = await this.ordersInvoicesRepository.list({
            ordersInvoices: fields,
            paging,
            sort
        })
            .catch(err => { throw new Error(err); });
        if (ordersInvoices) {
            return ordersInvoices;
        }
        return;
    }
}
exports.ListOrdersInvoicesUseCase = ListOrdersInvoicesUseCase;
