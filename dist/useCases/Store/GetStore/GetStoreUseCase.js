"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetStoreUseCase = void 0;
class GetStoreUseCase {
    constructor(storeRepository) {
        this.storeRepository = storeRepository;
    }
    async execute(data) {
        if (!data.code || typeof data.code != 'string') {
            throw new Error('store code missing');
        }
        const store = await this.storeRepository.findByStoreCode(parseInt(data.code));
        if (!store) {
            throw new Error('No results found with these parameters');
        }
        return store;
    }
}
exports.GetStoreUseCase = GetStoreUseCase;
