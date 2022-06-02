"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderNoteDataValidate = void 0;
class CreateOrderNoteDataValidate {
    execute(data) {
        const note = data.note;
        // orderId
        if (typeof note.orderId != 'number') {
            throw new Error('missing note orderId in the body');
        }
        // description
        if (typeof note.description != 'string') {
            throw new Error('missing note description in the body');
        }
        if (note.description.length == 0) {
            throw new Error('the note description cant be empty');
        }
        // by
        if (typeof note.by != 'string') {
            throw new Error('missing note by in the body');
        }
        if (note.by.length == 0) {
            throw new Error('the note by cant be empty');
        }
        return;
    }
}
exports.CreateOrderNoteDataValidate = CreateOrderNoteDataValidate;
