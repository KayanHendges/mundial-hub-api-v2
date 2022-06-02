"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportTrayOrderController = void 0;
class ImportTrayOrderController {
    constructor(importTrayOrderUseCase) {
        this.importTrayOrderUseCase = importTrayOrderUseCase;
    }
    async handle(request, response) {
        const { body } = request;
        try {
            const { createdId } = await this.importTrayOrderUseCase.execute(body);
            response.status(201).json({ createdId });
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            });
        }
    }
}
exports.ImportTrayOrderController = ImportTrayOrderController;
