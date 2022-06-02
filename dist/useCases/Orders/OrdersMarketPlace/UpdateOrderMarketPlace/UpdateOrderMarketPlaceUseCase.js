"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderMarketPlaceUseCase = void 0;
class UpdateOrderMarketPlaceUseCase {
    constructor(updateOrderMarketPlaceDataValidate, ordersMarketPlaceRepository) {
        this.updateOrderMarketPlaceDataValidate = updateOrderMarketPlaceDataValidate;
        this.ordersMarketPlaceRepository = ordersMarketPlaceRepository;
    }
    async execute(data) {
        try {
            await this.updateOrderMarketPlaceDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const { id, orderMarketPlace } = data;
        const updated = await this.ordersMarketPlaceRepository.update(orderMarketPlace, id);
        if (updated) {
            return { updated };
        }
        return;
    }
}
exports.UpdateOrderMarketPlaceUseCase = UpdateOrderMarketPlaceUseCase;
