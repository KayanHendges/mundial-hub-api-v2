"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindOrderNoteUseCase = void 0;
class FindOrderNoteUseCase {
    constructor(findOrderNoteDataValidate, ordersNotesRepository) {
        this.findOrderNoteDataValidate = findOrderNoteDataValidate;
        this.ordersNotesRepository = ordersNotesRepository;
    }
    async execute(data) {
        try {
            await this.findOrderNoteDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const { id } = data;
        const note = await this.ordersNotesRepository.find({ id })
            .catch(err => { throw new Error(err); });
        if (note) {
            return note;
        }
    }
}
exports.FindOrderNoteUseCase = FindOrderNoteUseCase;
