"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
function toDateOrNull(value) {
    if (!value) {
        return null;
    }
    if (typeof value == 'object') {
        return value;
    }
    if (value.length == 0) {
        return null;
    }
    try {
        const date = (0, date_fns_1.parseISO)(value);
        return date;
    }
    catch (err) {
        console.log(err);
        new Error(err);
        return null;
    }
}
exports.default = toDateOrNull;
