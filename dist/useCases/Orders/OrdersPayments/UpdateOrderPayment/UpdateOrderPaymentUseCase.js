"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderPaymentUseCase = void 0;
class UpdateOrderPaymentUseCase {
    constructor(updateOrderPaymentDataValidate, ordersPaymentsRepository) {
        this.updateOrderPaymentDataValidate = updateOrderPaymentDataValidate;
        this.ordersPaymentsRepository = ordersPaymentsRepository;
    }
    async execute(data) {
        try {
            this.updateOrderPaymentDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const { id } = data;
        const { payment } = data;
        const updated = await this.ordersPaymentsRepository.update(payment, id)
            .catch(err => { throw new Error(err); });
        if (updated) {
            return updated;
        }
        return;
    }
}
exports.UpdateOrderPaymentUseCase = UpdateOrderPaymentUseCase;
