"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOrderNoteDataValidate = void 0;
class DeleteOrderNoteDataValidate {
    execute(data) {
        const id = data.id;
        if (typeof id != 'number') {
            throw new Error('missing id in the body');
        }
        return;
    }
}
exports.DeleteOrderNoteDataValidate = DeleteOrderNoteDataValidate;
