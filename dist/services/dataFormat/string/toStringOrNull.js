"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toStringOrNull(value) {
    if (!value) {
        return null;
    }
    if (typeof value == 'number') {
        return value.toString();
    }
    if (typeof value == 'object') {
        return JSON.stringify(value);
    }
    if (value.length == 0) {
        return null;
    }
    return value.toString();
}
exports.default = toStringOrNull;
