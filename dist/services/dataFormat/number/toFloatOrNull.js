"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toFloatOrNull(value) {
    if (!value) {
        return null;
    }
    if (typeof value == 'number') {
        return value;
    }
    if (value.length == 0) {
        return null;
    }
    try {
        const number = parseFloat(value.replace(',', '.'));
        if (isNaN(number)) {
            return null;
        }
        return number;
    }
    catch (error) {
        console.log(error);
        new Error(error);
        return null;
    }
}
exports.default = toFloatOrNull;
