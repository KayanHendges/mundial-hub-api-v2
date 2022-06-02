"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderProductSoldUseCase = void 0;
class CreateOrderProductSoldUseCase {
    constructor(createOrderProductSoldDataValidate, ordersProductsSoldRepository, ordersRepository) {
        this.createOrderProductSoldDataValidate = createOrderProductSoldDataValidate;
        this.ordersProductsSoldRepository = ordersProductsSoldRepository;
        this.ordersRepository = ordersRepository;
    }
    async execute(data) {
        try {
            await this.createOrderProductSoldDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const { productSold } = data;
        const orderExists = await this.ordersRepository.find({ id: productSold.orderId })
            .catch(err => { throw new Error(err); });
        if (!orderExists) {
            throw new Error(`the order ${productSold.orderId} does not exists`);
        }
        const { id: createdId } = await this.ordersProductsSoldRepository.save(productSold)
            .catch(err => { throw new Error(err); });
        if (createdId) {
            return { createdId };
        }
        return;
    }
}
exports.CreateOrderProductSoldUseCase = CreateOrderProductSoldUseCase;
