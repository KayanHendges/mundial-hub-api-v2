"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindOrderMarketPlaceUseCase = void 0;
class FindOrderMarketPlaceUseCase {
    constructor(findOrderMarketPlaceDataValidate, ordersMarketPlaceRepository) {
        this.findOrderMarketPlaceDataValidate = findOrderMarketPlaceDataValidate;
        this.ordersMarketPlaceRepository = ordersMarketPlaceRepository;
    }
    async execute(data) {
        try {
            await this.findOrderMarketPlaceDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const param = data;
        const orderMarketPlace = await this.ordersMarketPlaceRepository.find(param)
            .catch(err => { throw new Error(err); });
        if (orderMarketPlace) {
            return orderMarketPlace;
        }
    }
}
exports.FindOrderMarketPlaceUseCase = FindOrderMarketPlaceUseCase;
