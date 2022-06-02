"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderNoteUseCase = void 0;
class UpdateOrderNoteUseCase {
    constructor(updateOrderNoteDataValidate, ordersNotesRepository) {
        this.updateOrderNoteDataValidate = updateOrderNoteDataValidate;
        this.ordersNotesRepository = ordersNotesRepository;
    }
    async execute(data) {
        try {
            await this.updateOrderNoteDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const { note, id } = data;
        const updated = await this.ordersNotesRepository.update(note, id)
            .catch(err => { throw new Error(err); });
        if (updated) {
            return updated;
        }
    }
}
exports.UpdateOrderNoteUseCase = UpdateOrderNoteUseCase;
