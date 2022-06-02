"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindOrderMarketPlaceController = void 0;
class FindOrderMarketPlaceController {
    constructor(findOrderMarketPlaceUseCase) {
        this.findOrderMarketPlaceUseCase = findOrderMarketPlaceUseCase;
    }
    async handle(request, response) {
        const { body } = request;
        try {
            const orderMarketPlace = await this.findOrderMarketPlaceUseCase.execute(body);
            response.status(201).json({ orderMarketPlace });
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            });
        }
    }
}
exports.FindOrderMarketPlaceController = FindOrderMarketPlaceController;
