"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindOrderProductSoldUseCase = void 0;
class FindOrderProductSoldUseCase {
    constructor(findOrderProductSoldDataValidate, ordersProductsSoldRepository) {
        this.findOrderProductSoldDataValidate = findOrderProductSoldDataValidate;
        this.ordersProductsSoldRepository = ordersProductsSoldRepository;
    }
    async execute(data) {
        try {
            await this.findOrderProductSoldDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const { id } = data;
        const productSold = await this.ordersProductsSoldRepository.find({ id })
            .catch(err => { throw new Error(err); });
        console.log(productSold);
        if (productSold) {
            return productSold;
        }
        return;
    }
}
exports.FindOrderProductSoldUseCase = FindOrderProductSoldUseCase;
