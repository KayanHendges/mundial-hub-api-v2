"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListOrdersNotesController = void 0;
class ListOrdersNotesController {
    constructor(listOrdersNotesUseCase) {
        this.listOrdersNotesUseCase = listOrdersNotesUseCase;
    }
    async handle(request, response) {
        const { body } = request;
        try {
            const notes = await this.listOrdersNotesUseCase.execute(body);
            response.status(201).json(notes);
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            });
        }
    }
}
exports.ListOrdersNotesController = ListOrdersNotesController;
