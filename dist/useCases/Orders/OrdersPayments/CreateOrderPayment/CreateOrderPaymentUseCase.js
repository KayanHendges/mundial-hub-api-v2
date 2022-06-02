"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderPaymentUseCase = void 0;
class CreateOrderPaymentUseCase {
    constructor(createOrderPaymentDataValidate, ordersPaymentsRepository, ordersRepository) {
        this.createOrderPaymentDataValidate = createOrderPaymentDataValidate;
        this.ordersPaymentsRepository = ordersPaymentsRepository;
        this.ordersRepository = ordersRepository;
    }
    async execute(data) {
        try {
            this.createOrderPaymentDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const { payment } = data;
        const orderExists = await this.ordersRepository.find({ id: payment.orderId })
            .catch(err => { throw new Error(err); });
        if (!orderExists) {
            throw new Error(`the order ${payment.orderId} does not exists`);
        }
        const { id: createdId } = await this.ordersPaymentsRepository.save(payment)
            .catch(err => { throw new Error(err); });
        if (createdId) {
            return { createdId };
        }
        return;
    }
}
exports.CreateOrderPaymentUseCase = CreateOrderPaymentUseCase;
