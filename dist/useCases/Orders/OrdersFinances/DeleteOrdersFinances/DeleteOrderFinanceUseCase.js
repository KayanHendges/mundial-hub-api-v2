"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOrderFinanceUseCase = void 0;
class DeleteOrderFinanceUseCase {
    constructor(deleteOrderFinanceDataValidate, ordersFinancesRepository) {
        this.deleteOrderFinanceDataValidate = deleteOrderFinanceDataValidate;
        this.ordersFinancesRepository = ordersFinancesRepository;
    }
    async execute(data) {
        try {
            await this.deleteOrderFinanceDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const { id } = data;
        const deletedId = await this.ordersFinancesRepository.delete({ id })
            .catch(err => { throw new Error(err); });
        if (deletedId) {
            return { deletedId };
        }
    }
}
exports.DeleteOrderFinanceUseCase = DeleteOrderFinanceUseCase;
