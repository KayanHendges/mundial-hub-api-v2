"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOrderUseCase = void 0;
class GetOrderUseCase {
    constructor(storeRepository, orderProvider) {
        this.storeRepository = storeRepository;
        this.orderProvider = orderProvider;
    }
    async execute(data) {
        const orderId = parseInt(data.order_id);
        const storeCode = parseInt(data.store_code);
        if (isNaN(orderId)) {
            throw new Error('missing order_id');
        }
        if (isNaN(storeCode)) {
            throw new Error('missing store_code');
        }
        const store = await this.storeRepository.findByStoreCode(storeCode)
            .catch(err => { throw new Error('error getting store from database'); });
        const order = await this.orderProvider.findOrderById(store, orderId)
            .catch(err => { throw new Error(err); });
        if (!order) {
            throw new Error('no orders found');
        }
        return order;
    }
}
exports.GetOrderUseCase = GetOrderUseCase;
