"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOrderProductSoldUseCase = void 0;
class DeleteOrderProductSoldUseCase {
    constructor(deleteOrderProductSoldDataValidate, ordersProductsSoldRepository) {
        this.deleteOrderProductSoldDataValidate = deleteOrderProductSoldDataValidate;
        this.ordersProductsSoldRepository = ordersProductsSoldRepository;
    }
    async execute(data) {
        try {
            await this.deleteOrderProductSoldDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const { id } = data;
        const deletedId = await this.ordersProductsSoldRepository.delete({ id });
        if (deletedId) {
            return { deletedId };
        }
    }
}
exports.DeleteOrderProductSoldUseCase = DeleteOrderProductSoldUseCase;
