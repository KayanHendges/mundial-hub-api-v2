"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListOrdersPaymentsUseCase = void 0;
class ListOrdersPaymentsUseCase {
    constructor(listOrdersPaymentsDataValidate, ordersPaymentsRepository) {
        this.listOrdersPaymentsDataValidate = listOrdersPaymentsDataValidate;
        this.ordersPaymentsRepository = ordersPaymentsRepository;
    }
    async execute(data) {
        try {
            await this.listOrdersPaymentsDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const { ordersPayments: fields, paging, sort } = data;
        const ordersPayments = await this.ordersPaymentsRepository.list({
            ordersPayments: fields,
            paging,
            sort
        })
            .catch(err => { throw new Error(err); });
        if (ordersPayments) {
            return ordersPayments;
        }
        return;
    }
}
exports.ListOrdersPaymentsUseCase = ListOrdersPaymentsUseCase;
