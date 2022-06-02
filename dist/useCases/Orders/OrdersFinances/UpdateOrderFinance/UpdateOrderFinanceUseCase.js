"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderFinanceUseCase = void 0;
class UpdateOrderFinanceUseCase {
    constructor(updateOrderFinanceDataValidate, ordersFinancesRepository) {
        this.updateOrderFinanceDataValidate = updateOrderFinanceDataValidate;
        this.ordersFinancesRepository = ordersFinancesRepository;
    }
    async execute(data) {
        try {
            await this.updateOrderFinanceDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const { finance, id } = data;
        const updated = await this.ordersFinancesRepository.update(finance, id)
            .catch(err => { throw new Error(err); });
        if (updated) {
            return { updated };
        }
        return;
    }
}
exports.UpdateOrderFinanceUseCase = UpdateOrderFinanceUseCase;
