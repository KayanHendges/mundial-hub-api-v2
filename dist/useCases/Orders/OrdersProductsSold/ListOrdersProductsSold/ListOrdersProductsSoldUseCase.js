"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListOrdersProductsSoldUseCase = void 0;
class ListOrdersProductsSoldUseCase {
    constructor(listOrdersProductsSoldDataValidate, ordersProductsSoldRepository) {
        this.listOrdersProductsSoldDataValidate = listOrdersProductsSoldDataValidate;
        this.ordersProductsSoldRepository = ordersProductsSoldRepository;
    }
    async execute(data) {
        try {
            await this.listOrdersProductsSoldDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const { productsSold: fields, paging, sort } = data;
        const products = await this.ordersProductsSoldRepository.list({
            ordersProductsSold: fields,
            paging,
            sort
        })
            .catch(err => { throw new Error(err); });
        if (products) {
            return products;
        }
    }
}
exports.ListOrdersProductsSoldUseCase = ListOrdersProductsSoldUseCase;
