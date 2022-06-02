"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindOrderPaymentUseCase = void 0;
class FindOrderPaymentUseCase {
    constructor(findOrderPaymentDataValidate, ordersPaymentsRepository) {
        this.findOrderPaymentDataValidate = findOrderPaymentDataValidate;
        this.ordersPaymentsRepository = ordersPaymentsRepository;
    }
    async execute(data) {
        try {
            await this.findOrderPaymentDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const { id } = data;
        const orderPayment = await this.ordersPaymentsRepository.find({ id })
            .catch(err => { throw new Error(err); });
        if (!orderPayment) {
            throw new Error(`no order payment with id ${id}`);
        }
        return orderPayment;
    }
}
exports.FindOrderPaymentUseCase = FindOrderPaymentUseCase;
