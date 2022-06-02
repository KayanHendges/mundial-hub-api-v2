"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOrderPaymentUseCase = void 0;
class DeleteOrderPaymentUseCase {
    constructor(deleteOrderPaymentDataValidate, ordersPaymentsRepository) {
        this.deleteOrderPaymentDataValidate = deleteOrderPaymentDataValidate;
        this.ordersPaymentsRepository = ordersPaymentsRepository;
    }
    async execute(data) {
        try {
            await this.deleteOrderPaymentDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const { id } = data;
        const deletedId = await this.ordersPaymentsRepository.delete({ id })
            .catch(err => { throw new Error(err); });
        if (deletedId) {
            return { deletedId };
        }
    }
}
exports.DeleteOrderPaymentUseCase = DeleteOrderPaymentUseCase;
