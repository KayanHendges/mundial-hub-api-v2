"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderInvoiceUseCase = void 0;
class CreateOrderInvoiceUseCase {
    constructor(createOrderInvoiceDataValidate, ordersInvoicesRepository, ordersRepository) {
        this.createOrderInvoiceDataValidate = createOrderInvoiceDataValidate;
        this.ordersInvoicesRepository = ordersInvoicesRepository;
        this.ordersRepository = ordersRepository;
    }
    async execute(data) {
        try {
            await this.createOrderInvoiceDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const { invoice } = data;
        const orderExists = await this.ordersRepository.find({ id: invoice.orderId })
            .catch(err => { throw new Error(err); });
        if (!orderExists) {
            throw new Error(`the order ${invoice.orderId} does not exists`);
        }
        const { id: createdId } = await this.ordersInvoicesRepository.save(invoice)
            .catch(err => { throw new Error(err); });
        if (createdId) {
            return { createdId };
        }
    }
}
exports.CreateOrderInvoiceUseCase = CreateOrderInvoiceUseCase;
