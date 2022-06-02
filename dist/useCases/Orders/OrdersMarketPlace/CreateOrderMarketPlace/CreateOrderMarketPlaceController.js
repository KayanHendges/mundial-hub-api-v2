"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderMarketPlaceController = void 0;
class CreateOrderMarketPlaceController {
    constructor(createOrderMarketPlaceUseCase) {
        this.createOrderMarketPlaceUseCase = createOrderMarketPlaceUseCase;
    }
    async handle(request, response) {
        const { body } = request;
        try {
            const { createdId } = await this.createOrderMarketPlaceUseCase.execute(body);
            response.status(201).json({ createdId });
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            });
        }
    }
}
exports.CreateOrderMarketPlaceController = CreateOrderMarketPlaceController;
