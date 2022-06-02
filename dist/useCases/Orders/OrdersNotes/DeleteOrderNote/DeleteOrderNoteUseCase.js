"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOrderNoteUseCase = void 0;
class DeleteOrderNoteUseCase {
    constructor(deleteOrderNoteDataValidate, ordersNotesRepository) {
        this.deleteOrderNoteDataValidate = deleteOrderNoteDataValidate;
        this.ordersNotesRepository = ordersNotesRepository;
    }
    async execute(data) {
        try {
            await this.deleteOrderNoteDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const { id } = data;
        const deletedId = await this.ordersNotesRepository.delete({ id })
            .catch(err => { throw new Error(err); });
        if (deletedId) {
            return { deletedId };
        }
    }
}
exports.DeleteOrderNoteUseCase = DeleteOrderNoteUseCase;
