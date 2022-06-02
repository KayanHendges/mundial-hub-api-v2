"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindOrderUseCase = void 0;
class FindOrderUseCase {
    constructor(findOrderDataValidate, ordersRepository) {
        this.findOrderDataValidate = findOrderDataValidate;
        this.ordersRepository = ordersRepository;
    }
    async execute(data) {
        try {
            await this.findOrderDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const { id } = data;
        const order = await this.ordersRepository.find(data)
            .catch(err => { throw new Error(err); });
        if (order) {
            return order;
        }
    }
}
exports.FindOrderUseCase = FindOrderUseCase;
