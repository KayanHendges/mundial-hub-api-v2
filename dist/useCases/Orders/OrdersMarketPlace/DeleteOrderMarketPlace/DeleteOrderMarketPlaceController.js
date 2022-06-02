"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOrderMarketPlaceController = void 0;
const toIntOrNull_1 = __importDefault(require("../../../../services/dataFormat/number/toIntOrNull"));
class DeleteOrderMarketPlaceController {
    constructor(deleteOrderMarketPlaceUseCase) {
        this.deleteOrderMarketPlaceUseCase = deleteOrderMarketPlaceUseCase;
    }
    async handle(request, response) {
        const { params } = request;
        try {
            const { deletedId } = await this.deleteOrderMarketPlaceUseCase.execute({ id: (0, toIntOrNull_1.default)(params.id) });
            response.status(201).json({ deletedId });
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            });
        }
    }
}
exports.DeleteOrderMarketPlaceController = DeleteOrderMarketPlaceController;
