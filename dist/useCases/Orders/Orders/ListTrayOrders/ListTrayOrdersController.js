"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTrayOrdersController = void 0;
const toIntOrNull_1 = __importDefault(require("../../../../services/dataFormat/number/toIntOrNull"));
class ListTrayOrdersController {
    constructor(listTrayOrdersUseCase) {
        this.listTrayOrdersUseCase = listTrayOrdersUseCase;
    }
    async handle(request, response) {
        const { store_code, page, limit, include_imported } = request.query;
        const includeImported = include_imported == 'true' ? true
            : include_imported == 'false' ? false : null;
        try {
            const orders = await this.listTrayOrdersUseCase.execute({
                storeCode: (0, toIntOrNull_1.default)(store_code),
                includeImported,
                page: (0, toIntOrNull_1.default)(page),
                limit: (0, toIntOrNull_1.default)(limit),
            });
            return response.status(200).json(orders);
        }
        catch (err) {
            console.log(err);
            return response.status(400).json({
                message: err.message || 'unexpected error'
            });
        }
    }
}
exports.ListTrayOrdersController = ListTrayOrdersController;
