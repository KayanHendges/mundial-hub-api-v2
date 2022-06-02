"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toBoolean(value) {
    if (!value) {
        return null;
    }
    if (value == '1' || value == 1) {
        return true;
    }
    if (value == '0' || value == 0) {
        return false;
    }
    return null;
}
exports.default = toBoolean;
