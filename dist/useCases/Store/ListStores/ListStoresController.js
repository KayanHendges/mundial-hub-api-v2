"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListStoresController = void 0;
class ListStoresController {
    constructor(listStoresUseCase) {
        this.listStoresUseCase = listStoresUseCase;
    }
    async handle(request, response) {
        const { body } = request;
        try {
            const list = await this.listStoresUseCase.execute(body);
            response.status(201).json(list);
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            });
        }
    }
}
exports.ListStoresController = ListStoresController;
