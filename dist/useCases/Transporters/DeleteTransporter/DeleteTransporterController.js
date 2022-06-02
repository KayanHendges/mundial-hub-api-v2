"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTransporterController = void 0;
const toIntOrNull_1 = __importDefault(require("../../../services/dataFormat/number/toIntOrNull"));
class DeleteTransporterController {
    constructor(deleteTransporterUseCase) {
        this.deleteTransporterUseCase = deleteTransporterUseCase;
    }
    async handle(request, response) {
        const { id } = request.params;
        try {
            await this.deleteTransporterUseCase.execute({ id: (0, toIntOrNull_1.default)(id) });
            response.status(200).json({
                message: `transporter ${id} deleted with success`
            });
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            });
        }
    }
}
exports.DeleteTransporterController = DeleteTransporterController;
