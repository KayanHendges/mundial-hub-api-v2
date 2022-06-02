"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindOrderFinanceUseCase = void 0;
class FindOrderFinanceUseCase {
    constructor(findOrderFinanceDataValidate, ordersFinancesRepository) {
        this.findOrderFinanceDataValidate = findOrderFinanceDataValidate;
        this.ordersFinancesRepository = ordersFinancesRepository;
    }
    async execute(data) {
        try {
            await this.findOrderFinanceDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const { id } = data;
        const OrderFinance = await this.ordersFinancesRepository.find({ id })
            .catch(err => { throw new Error(err); });
        if (OrderFinance) {
            return OrderFinance;
        }
    }
}
exports.FindOrderFinanceUseCase = FindOrderFinanceUseCase;
