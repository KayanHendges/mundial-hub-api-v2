"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOrderCompleteUseCase = void 0;
class DeleteOrderCompleteUseCase {
    constructor(deleteOrderCompleteDataValidate, ordersCompleteRepository) {
        this.deleteOrderCompleteDataValidate = deleteOrderCompleteDataValidate;
        this.ordersCompleteRepository = ordersCompleteRepository;
    }
    async execute(data) {
        try {
            await this.deleteOrderCompleteDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const { id } = data;
        const deletedId = await this.ordersCompleteRepository.delete(id)
            .catch(err => { throw new Error(err); });
        if (deletedId) {
            return { deletedId };
        }
        return;
    }
}
exports.DeleteOrderCompleteUseCase = DeleteOrderCompleteUseCase;
