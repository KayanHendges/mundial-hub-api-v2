"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOrderInvoiceController = void 0;
const toIntOrNull_1 = __importDefault(require("../../../../services/dataFormat/number/toIntOrNull"));
class DeleteOrderInvoiceController {
    constructor(deleteOrderInvoiceUseCase) {
        this.deleteOrderInvoiceUseCase = deleteOrderInvoiceUseCase;
    }
    async handle(request, response) {
        const { id } = request.params;
        try {
            const { deletedId } = await this.deleteOrderInvoiceUseCase.execute({ id: (0, toIntOrNull_1.default)(id) });
            response.status(201).json({ deletedId });
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            });
        }
    }
}
exports.DeleteOrderInvoiceController = DeleteOrderInvoiceController;
