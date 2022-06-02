"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderFinanceUseCase = void 0;
class CreateOrderFinanceUseCase {
    constructor(createOrderFinanceDataValidate, ordersFinancesRepository, ordersRepository) {
        this.createOrderFinanceDataValidate = createOrderFinanceDataValidate;
        this.ordersFinancesRepository = ordersFinancesRepository;
        this.ordersRepository = ordersRepository;
    }
    async execute(data) {
        try {
            await this.createOrderFinanceDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const { finance } = data;
        const orderExists = await this.ordersRepository.find({ id: finance.orderId })
            .catch(err => { throw new Error(err); });
        if (!orderExists) {
            throw new Error(`the order ${finance.orderId} does not exists`);
        }
        const { id: createdId } = await this.ordersFinancesRepository.save(finance)
            .catch(err => { throw new Error(err); });
        if (createdId) {
            return { createdId };
        }
    }
}
exports.CreateOrderFinanceUseCase = CreateOrderFinanceUseCase;
