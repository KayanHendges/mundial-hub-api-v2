"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toStringOrEmptyString(value) {
    if (!value) {
        return '';
    }
    if (typeof value == 'number') {
        return value.toString();
    }
    if (typeof value == 'object') {
        return JSON.stringify(value);
    }
    if (value.length == 0) {
        return '';
    }
    return value.toString();
}
exports.default = toStringOrEmptyString;
