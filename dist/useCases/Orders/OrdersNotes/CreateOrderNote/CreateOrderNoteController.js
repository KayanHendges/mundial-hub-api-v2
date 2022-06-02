"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderNoteController = void 0;
class CreateOrderNoteController {
    constructor(createOrderNoteUseCase) {
        this.createOrderNoteUseCase = createOrderNoteUseCase;
    }
    async handle(request, response) {
        const { body } = request;
        try {
            const { createdId } = await this.createOrderNoteUseCase.execute(body);
            response.status(201).json({ createdId });
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            });
        }
    }
}
exports.CreateOrderNoteController = CreateOrderNoteController;
