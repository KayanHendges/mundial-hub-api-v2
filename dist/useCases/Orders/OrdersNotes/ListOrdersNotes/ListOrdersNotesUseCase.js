"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListOrdersNotesUseCase = void 0;
class ListOrdersNotesUseCase {
    constructor(listOrdersNotesDataValidate, ordersNotesRepository) {
        this.listOrdersNotesDataValidate = listOrdersNotesDataValidate;
        this.ordersNotesRepository = ordersNotesRepository;
    }
    async execute(data) {
        try {
            await this.listOrdersNotesDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const { notes: fields, paging, sort } = data;
        const notes = await this.ordersNotesRepository.list({
            ordersNotes: fields,
            paging,
            sort
        })
            .catch(err => { throw new Error(err); });
        if (notes) {
            return notes;
        }
    }
}
exports.ListOrdersNotesUseCase = ListOrdersNotesUseCase;
