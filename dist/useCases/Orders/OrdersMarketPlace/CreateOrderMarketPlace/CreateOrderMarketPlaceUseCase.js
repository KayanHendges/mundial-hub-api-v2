"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderMarketPlaceUseCase = void 0;
class CreateOrderMarketPlaceUseCase {
    constructor(createOrderMarketPlaceDataValidate, ordersRepository, ordersMarketPlaceRepository) {
        this.createOrderMarketPlaceDataValidate = createOrderMarketPlaceDataValidate;
        this.ordersRepository = ordersRepository;
        this.ordersMarketPlaceRepository = ordersMarketPlaceRepository;
    }
    async execute(data) {
        try {
            await this.createOrderMarketPlaceDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const { orderMarketPlace } = data;
        const orderExists = await this.ordersRepository.find({ id: orderMarketPlace.orderId })
            .catch(err => { throw new Error(err); });
        if (!orderExists) {
            throw new Error(`the order ${orderMarketPlace.orderId} does not exists`);
        }
        const { id: createdId } = await this.ordersMarketPlaceRepository.save(orderMarketPlace)
            .catch(err => { throw new Error(err); });
        if (createdId) {
            return { createdId };
        }
        return;
    }
}
exports.CreateOrderMarketPlaceUseCase = CreateOrderMarketPlaceUseCase;
