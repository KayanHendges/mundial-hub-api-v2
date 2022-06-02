"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderProductSoldUseCase = void 0;
class UpdateOrderProductSoldUseCase {
    constructor(updateOrderProductSoldDataValidate, ordersProductsSoldRepository) {
        this.updateOrderProductSoldDataValidate = updateOrderProductSoldDataValidate;
        this.ordersProductsSoldRepository = ordersProductsSoldRepository;
    }
    async execute(data) {
        try {
            await this.updateOrderProductSoldDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const { productSold, id } = data;
        const updated = await this.ordersProductsSoldRepository.update(productSold, id)
            .catch(err => { throw new Error(err); });
        if (updated) {
            return updated;
        }
    }
}
exports.UpdateOrderProductSoldUseCase = UpdateOrderProductSoldUseCase;
