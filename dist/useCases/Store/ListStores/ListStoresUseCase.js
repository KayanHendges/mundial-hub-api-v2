"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListStoresUseCase = void 0;
class ListStoresUseCase {
    constructor(listStoresDataValidate, storeRepository) {
        this.listStoresDataValidate = listStoresDataValidate;
        this.storeRepository = storeRepository;
    }
    async execute(data) {
        try {
            await this.listStoresDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const { stores: fields, paging, sort } = data;
        const list = await this.storeRepository.list(fields)
            .catch(err => { throw new Error(err); });
        if (list) {
            return { stores: list };
        }
    }
}
exports.ListStoresUseCase = ListStoresUseCase;
