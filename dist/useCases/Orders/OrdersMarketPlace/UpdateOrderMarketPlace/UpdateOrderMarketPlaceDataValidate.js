"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderMarketPlaceDataValidate = void 0;
const notIncludesTheKeys_1 = require("../../../../services/dataValidate/notIncludesTheKeys");
class UpdateOrderMarketPlaceDataValidate {
    execute(data) {
        const { id, orderMarketPlace: order } = data;
        if (typeof id != 'number') {
            throw new Error('missing id in the body');
        }
        const availableFields = ['name', 'marketPlaceOrderId', 'link'];
        (0, notIncludesTheKeys_1.notIncludesTheKeys)(availableFields, order);
        if (typeof order == 'undefined') {
            throw new Error('missing order data in the body');
        }
        // name
        if (typeof order.name != 'undefined') {
            if (typeof order.name != 'string') {
                throw new Error('missing order name is not a number');
            }
            if (order.name.length == 0) {
                throw new Error('the order name cant be empty');
            }
        }
        // marketPlaceOrderId
        if (typeof order.marketPlaceOrderId != 'string') {
            throw new Error('missing order marketPlaceOrderId in the body');
        }
        if (order.marketPlaceOrderId.length == 0) {
            throw new Error('the order marketPlaceOrderId cant be empty');
        }
        // link
        if (typeof order.link != 'undefined') {
            if (typeof order.link != 'string') {
                throw new Error('missing order link is not a number');
            }
            if (order.link.length == 0) {
                throw new Error('the order link cant be empty');
            }
        }
        return;
    }
}
exports.UpdateOrderMarketPlaceDataValidate = UpdateOrderMarketPlaceDataValidate;
