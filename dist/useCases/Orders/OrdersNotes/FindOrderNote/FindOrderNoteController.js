"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindOrderNoteController = void 0;
class FindOrderNoteController {
    constructor(findOrderNoteUseCase) {
        this.findOrderNoteUseCase = findOrderNoteUseCase;
    }
    async handle(request, response) {
        const { body } = request;
        try {
            const note = await this.findOrderNoteUseCase.execute(body);
            response.status(201).json({ note });
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            });
        }
    }
}
exports.FindOrderNoteController = FindOrderNoteController;
