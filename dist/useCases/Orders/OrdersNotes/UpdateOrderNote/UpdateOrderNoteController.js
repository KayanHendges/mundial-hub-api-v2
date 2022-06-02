"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderNoteController = void 0;
class UpdateOrderNoteController {
    constructor(updateOrderNoteUseCase) {
        this.updateOrderNoteUseCase = updateOrderNoteUseCase;
    }
    async handle(request, response) {
        const { body } = request;
        try {
            const updated = await this.updateOrderNoteUseCase.execute(body);
            response.status(201).json({
                message: `order note ${updated.id} updated with success`,
                updated
            });
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            });
        }
    }
}
exports.UpdateOrderNoteController = UpdateOrderNoteController;
