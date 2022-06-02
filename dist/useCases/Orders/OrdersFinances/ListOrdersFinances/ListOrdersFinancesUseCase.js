"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListOrdersFinancesUseCase = void 0;
class ListOrdersFinancesUseCase {
    constructor(listOrdersFinancesDataValidate, ordersFinancesRepository) {
        this.listOrdersFinancesDataValidate = listOrdersFinancesDataValidate;
        this.ordersFinancesRepository = ordersFinancesRepository;
    }
    async execute(data) {
        try {
            await this.listOrdersFinancesDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const { finances: fields, paging, sort } = data;
        const finances = await this.ordersFinancesRepository.list({
            ordersFinances: fields,
            sort,
            paging
        })
            .catch(err => { throw new Error(err); });
        if (finances) {
            return finances;
        }
    }
}
exports.ListOrdersFinancesUseCase = ListOrdersFinancesUseCase;
