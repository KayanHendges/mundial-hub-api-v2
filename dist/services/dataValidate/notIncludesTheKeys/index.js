"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notIncludesTheKeys = void 0;
function notIncludesTheKeys(keys, object) {
    Object.keys(object).map(key => {
        if (!keys.includes(key)) {
            throw new Error(`the ${key} is not expected`);
        }
    });
}
exports.notIncludesTheKeys = notIncludesTheKeys;
