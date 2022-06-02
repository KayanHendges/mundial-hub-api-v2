"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOrderMarketPlaceUseCase = void 0;
class DeleteOrderMarketPlaceUseCase {
    constructor(deleteOrderMarketPlaceDataValidate, ordersMarketPlaceRepository) {
        this.deleteOrderMarketPlaceDataValidate = deleteOrderMarketPlaceDataValidate;
        this.ordersMarketPlaceRepository = ordersMarketPlaceRepository;
    }
    async execute(data) {
        try {
            await this.deleteOrderMarketPlaceDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const { id } = data;
        const deletedId = await this.ordersMarketPlaceRepository.delete({ id })
            .catch(err => { throw new Error(err); });
        if (deletedId) {
            return { deletedId };
        }
    }
}
exports.DeleteOrderMarketPlaceUseCase = DeleteOrderMarketPlaceUseCase;
