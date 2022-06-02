"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindOrderNoteDataValidate = void 0;
class FindOrderNoteDataValidate {
    execute(data) {
        const id = data.id;
        if (typeof id != 'number') {
            throw new Error('missing id in the body');
        }
        return;
    }
}
exports.FindOrderNoteDataValidate = FindOrderNoteDataValidate;
