"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListOrdersUseCase = void 0;
class ListOrdersUseCase {
    constructor(listOrdersDataValidate, ordersRepository) {
        this.listOrdersDataValidate = listOrdersDataValidate;
        this.ordersRepository = ordersRepository;
    }
    async execute(data) {
        try {
            await this.listOrdersDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const { orders: fields, paging, sort } = data;
        const ordersList = await this.ordersRepository.list({
            orders: fields,
            paging,
            sort
        })
            .catch(err => { throw new Error(err); });
        if (ordersList) {
            return ordersList;
        }
        return;
    }
}
exports.ListOrdersUseCase = ListOrdersUseCase;
