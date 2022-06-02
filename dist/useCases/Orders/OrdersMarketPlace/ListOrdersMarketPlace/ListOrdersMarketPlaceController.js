"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListOrdersMarketPlaceController = void 0;
class ListOrdersMarketPlaceController {
    constructor(listOrdesMarketPlacesUseCase) {
        this.listOrdesMarketPlacesUseCase = listOrdesMarketPlacesUseCase;
    }
    async handle(request, response) {
        const { body } = request;
        try {
            const list = await this.listOrdesMarketPlacesUseCase.execute(body);
            response.status(201).json(list);
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            });
        }
    }
}
exports.ListOrdersMarketPlaceController = ListOrdersMarketPlaceController;
