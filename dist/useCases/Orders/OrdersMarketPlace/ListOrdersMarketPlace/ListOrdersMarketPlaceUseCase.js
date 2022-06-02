"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListOrdersMarketPlaceUseCase = void 0;
class ListOrdersMarketPlaceUseCase {
    constructor(listOrdersMarketPlaceDataValidate, ordersMarketPlaceRepository) {
        this.listOrdersMarketPlaceDataValidate = listOrdersMarketPlaceDataValidate;
        this.ordersMarketPlaceRepository = ordersMarketPlaceRepository;
    }
    async execute(data) {
        try {
            await this.listOrdersMarketPlaceDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const { ordersMarketPlaces: fields, paging, sort } = data;
        const ordersMarketPlace = await this.ordersMarketPlaceRepository.list({
            ordersMarketPlaces: fields,
            paging,
            sort
        })
            .catch(err => { throw new Error(err); });
        if (ordersMarketPlace) {
            return ordersMarketPlace;
        }
    }
}
exports.ListOrdersMarketPlaceUseCase = ListOrdersMarketPlaceUseCase;
