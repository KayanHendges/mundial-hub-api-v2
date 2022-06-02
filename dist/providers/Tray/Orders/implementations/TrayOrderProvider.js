"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrayOrderProvider = void 0;
const axios_1 = __importDefault(require("axios"));
const toBoolean_1 = __importDefault(require("../../../../services/dataFormat/boolean/toBoolean"));
const toDateOrNull_1 = __importDefault(require("../../../../services/dataFormat/date/toDateOrNull"));
const toFloatOrNull_1 = __importDefault(require("../../../../services/dataFormat/number/toFloatOrNull"));
const toFloatOrZero_1 = __importDefault(require("../../../../services/dataFormat/number/toFloatOrZero"));
const toIntOrNull_1 = __importDefault(require("../../../../services/dataFormat/number/toIntOrNull"));
const toIntOrZero_1 = __importDefault(require("../../../../services/dataFormat/number/toIntOrZero"));
const toStringOrNull_1 = __importDefault(require("../../../../services/dataFormat/string/toStringOrNull"));
class TrayOrderProvider {
    async getOrdersListInformation(store) {
        const query = `${store.apiAddress}/orders?sort=id_desc&access_token=${store.accessToken}`;
        const listInformation = await axios_1.default.get(query)
            .then(response => {
            var _a;
            const orderIdList = [];
            (_a = response.data.Orders) === null || _a === void 0 ? void 0 : _a.map(Order => {
                const id = (0, toIntOrNull_1.default)(Order.Order.id);
                if (id) {
                    orderIdList.push(id);
                }
            });
            const totalOrders = (0, toIntOrNull_1.default)(response.data.paging.total);
            const lastOrderId = totalOrders > 0 ? (0, toIntOrNull_1.default)(response.data.Orders[0].Order.id) : 0;
            if (lastOrderId && totalOrders) {
                return { orderIdList, lastOrderId, totalOrders };
            }
        })
            .catch(err => {
            console.log(err);
            throw new Error('error getting order list information from Tray');
        });
        if (!listInformation) {
            throw new Error('no order list information from Tray');
        }
        return listInformation;
    }
    async list({ store, limit, page }) {
        const query = `${store.apiAddress}/orders?sort=id_desc&page=${page}&limit=${limit}&access_token=${store.accessToken}`;
        const response = await axios_1.default.get(query)
            .then(response => {
            const orders = [];
            const trayOrders = response.data.Orders;
            trayOrders === null || trayOrders === void 0 ? void 0 : trayOrders.map(Order => {
                const order = Order.Order;
                if (order) {
                    orders.push(order);
                }
            });
            const page = (0, toIntOrNull_1.default)(response.data.paging.page);
            const limit = (0, toIntOrNull_1.default)(response.data.paging.limit);
            const totalOrders = (0, toIntOrNull_1.default)(response.data.paging.total);
            var totalPages = null;
            if (limit && totalOrders) {
                totalPages = Math.ceil(totalOrders / limit);
            }
            if (orders && page && limit && totalOrders && totalPages) {
                return {
                    orders,
                    page,
                    limit,
                    totalOrders,
                    totalPages
                };
            }
            throw new Error('error getting order list from Tray');
        })
            .catch(err => {
            console.log(err);
            throw new Error('error getting order list from Tray');
        });
        if (!response) {
            throw new Error('error getting order list from Tray');
        }
        return response;
    }
    async findOrderById(store, orderId) {
        var _a, _b;
        const query = `${store.apiAddress}/orders/${orderId}/complete?access_token=${store.accessToken}`;
        const trayOrder = await axios_1.default.get(query)
            .then(response => {
            return response.data.Order;
        })
            .catch(err => {
            throw new Error('Error getting order by order_id from Tray Api');
        });
        const randomUser = axios_1.default.get('https://random-data-api.com/api/users/random_user')
            .then(response => { response.data; })
            .catch(err => { throw new Error(err); });
        const customerAddresses = trayOrder.Customer.CustomerAddresses.map(customerAddress => {
            const address = customerAddress.CustomerAddress;
            const addressType = () => {
                if (address.type == '0') {
                    return 'cobrança';
                }
                if (address.type == '1') {
                    return 'entrega';
                }
                return null;
            };
            return {
                type: addressType(),
                name: (0, toStringOrNull_1.default)(address.description),
                recipient: (0, toStringOrNull_1.default)(address.recipient),
                address: (0, toStringOrNull_1.default)(address.address),
                number: (0, toStringOrNull_1.default)(address.number),
                complement: (0, toStringOrNull_1.default)(address.complement),
                neighborhood: (0, toStringOrNull_1.default)(address.neighborhood),
                city: (0, toStringOrNull_1.default)(address.city),
                state: (0, toStringOrNull_1.default)(address.state),
                zipCode: (0, toStringOrNull_1.default)(address.zip_code),
                country: (0, toStringOrNull_1.default)(address.country),
                active: (0, toBoolean_1.default)(address.active),
            };
        });
        const payments = trayOrder.Payment.map(payment => {
            const paid = (0, toFloatOrZero_1.default)(payment.Payment.value);
            const totalOrder = (0, toFloatOrZero_1.default)(trayOrder.total);
            const value = paid == totalOrder ? totalOrder : paid;
            return {
                value: value,
                date: (0, toDateOrNull_1.default)(payment.Payment.date),
                method: (0, toStringOrNull_1.default)(payment.Payment.method),
                modified: (0, toDateOrNull_1.default)(payment.Payment.modified),
                created: (0, toDateOrNull_1.default)(payment.Payment.created)
            };
        });
        const couponInfo = trayOrder.coupon != undefined ? trayOrder.coupon : {
            code: null,
            discount: null,
            type: null,
        };
        const invoices = trayOrder.OrderInvoice.map(orderInvoice => {
            const invoice = orderInvoice.OrderInvoice;
            return {
                cnpj: null,
                key: (0, toStringOrNull_1.default)(invoice.key),
                link: (0, toStringOrNull_1.default)(invoice.link),
                number: (0, toIntOrNull_1.default)(invoice.number),
            };
        });
        const chosenShipping = () => {
            const splitted = trayOrder.shipment.split(' - ');
            if (splitted.length == 0) {
                const type = splitted[0].length > 0 ? splitted[0] : '';
                return { type: '', id: 0 };
            }
            if (splitted.length == 1) {
                const type = splitted[0].length > 0 ? splitted[0] : '';
                return { type, id: 0 };
            }
            const type = splitted[0].length > 0 ? splitted[0] : '';
            const id = splitted[1].length > 0 ? (0, toIntOrNull_1.default)(splitted[1]) : 0;
            if (type && id) {
                return { type, id };
            }
            return { type: '', id: 0 };
        };
        const productsSold = await Promise.all(trayOrder.ProductsSold.map(async (productSold) => {
            const product = productSold.ProductsSold;
            const productId = await getHubIdProduct((0, toIntOrNull_1.default)(product.product_id), store.trayId);
            const kitId = await getHubIdProduct((0, toIntOrNull_1.default)(product.product_kit_id), store.trayId);
            const name = (0, toStringOrNull_1.default)(product.name);
            const originalName = (0, toStringOrNull_1.default)(product.original_name);
            const productName = originalName ? originalName : name;
            return {
                trayId: (0, toIntOrNull_1.default)(product.product_id),
                trayKitId: (0, toIntOrNull_1.default)(product.product_kit_id),
                productId: productId,
                kitId: kitId,
                reference: (0, toStringOrNull_1.default)(product.reference),
                quantity: (0, toIntOrZero_1.default)(product.quantity),
                name: productName,
                cost: (0, toFloatOrNull_1.default)(product.cost_price),
                price: (0, toFloatOrNull_1.default)(product.original_price),
                paidPrice: (0, toFloatOrNull_1.default)(product.price),
            };
        }));
        const notes = [];
        const trayNote = [];
        (_a = trayOrder === null || trayOrder === void 0 ? void 0 : trayOrder.store_note) === null || _a === void 0 ? void 0 : _a.split(' ').map((word, index) => {
            if (index < 2 || word == '<br/>') {
                return;
            }
            trayNote.push(word);
        });
        notes.push({
            description: trayNote.join(' '),
            by: 'tray',
            modified: null,
            created: null,
        });
        const marketplaceOrders = trayOrder.MarketplaceOrder.map((martketPlaceOrder) => {
            const order = martketPlaceOrder.MarketplaceOrder;
            const marketPlaceOrderId = (0, toStringOrNull_1.default)(order.marketplace_order_id);
            const link = () => {
                if ((order === null || order === void 0 ? void 0 : order.marketplace_name) == 'Mercado Livre') {
                    return `https://www.mercadolivre.com.br/vendas/${marketPlaceOrderId}/detalhe`;
                }
                if ((order === null || order === void 0 ? void 0 : order.marketplace_name) == 'Via Varejo') {
                    return `https://pas.viavarejo.com.br/vendas/pedidos/detalhes/${marketPlaceOrderId}`;
                }
                return null;
            };
            return {
                name: (0, toStringOrNull_1.default)(order.marketplace_name),
                marketPlaceOrderId,
                link: link(),
                created: (0, toDateOrNull_1.default)(order.created)
            };
        });
        const deliveryTime = () => {
            if (trayOrder.delivery_time.length == 0) {
                return { min: null, max: null };
            }
            const deliveryArray = trayOrder.delivery_time.split(" a ");
            if (deliveryArray.length == 1) {
                const minAndMax = (0, toIntOrNull_1.default)(deliveryArray[0]);
                return { min: minAndMax, max: minAndMax };
            }
            if (deliveryArray.length == 2) {
                const min = (0, toIntOrNull_1.default)(deliveryArray[0]);
                const max = (0, toIntOrNull_1.default)(deliveryArray[1]);
                return { min, max };
            }
            return { min: null, max: null };
        };
        return {
            trayOrderId: (0, toIntOrNull_1.default)(trayOrder.id),
            storeCode: store.trayId,
            status: trayOrder.status,
            subtotal: (0, toFloatOrNull_1.default)(trayOrder.partial_total),
            taxes: (0, toFloatOrNull_1.default)(trayOrder.taxes),
            discount: (0, toFloatOrNull_1.default)(trayOrder.discount),
            paymentMethod: (0, toStringOrNull_1.default)(trayOrder.payment_method),
            paymentMethodDiscount: (0, toFloatOrNull_1.default)(trayOrder.payment_method_rate.replace('-', '')),
            coupon: couponInfo.code,
            discountCoupon: (0, toFloatOrNull_1.default)((_b = trayOrder === null || trayOrder === void 0 ? void 0 : trayOrder.coupon) === null || _b === void 0 ? void 0 : _b.discount),
            total: (0, toFloatOrNull_1.default)(trayOrder.total),
            localSale: (0, toStringOrNull_1.default)(trayOrder.point_sale),
            chosenTransporterId: chosenShipping().id,
            chosenShippingType: chosenShipping().type,
            chosenShippingValue: (0, toFloatOrNull_1.default)(trayOrder.shipment_value),
            deliveryTimeMin: deliveryTime().min,
            deliveryTimeMax: deliveryTime().max,
            transporterId: null,
            shippingCost: null,
            dispatchedDate: (0, toDateOrNull_1.default)(trayOrder.shipment_date),
            deliveredDate: null,
            partnerId: (0, toIntOrNull_1.default)(trayOrder.partner_id),
            customer: {
                name: (0, toStringOrNull_1.default)(trayOrder.Customer.name),
                cpf: (0, toStringOrNull_1.default)(trayOrder.Customer.cpf),
                cnpj: (0, toStringOrNull_1.default)(trayOrder.Customer.cnpj),
                email: (0, toStringOrNull_1.default)(trayOrder.Customer.email),
                phone: (0, toStringOrNull_1.default)(trayOrder.Customer.phone),
                cellphone: (0, toStringOrNull_1.default)(trayOrder.Customer.cellphone),
                addresses: customerAddresses,
                modified: (0, toDateOrNull_1.default)(trayOrder.Customer.modified),
                created: (0, toDateOrNull_1.default)(trayOrder.Customer.created),
            },
            paid: (0, toBoolean_1.default)(trayOrder.has_payment),
            payments: payments,
            invoices: invoices,
            finances: [],
            productsSold: productsSold,
            notes: notes,
            marketPlaceOrder: marketplaceOrders.length > 0 ? marketplaceOrders[0] : null,
            modified: (0, toDateOrNull_1.default)(trayOrder.modified),
            created: (0, toDateOrNull_1.default)(`${trayOrder.date} ${trayOrder.hour}`),
        };
        async function getHubIdProduct(trayId, storeId) {
            const query = `https://api.mundialhub.com.br/products/unitary-by-tray-id?tray_id=${trayId}&store_id=${storeId}`;
            const hubId = await axios_1.default.get(query)
                .then(response => {
                var _a;
                if (((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.hub_id) != undefined) {
                    return response.data.hub_id;
                }
                else {
                    return null;
                }
            })
                .catch(err => { return null; });
            return hubId;
        }
    }
}
exports.TrayOrderProvider = TrayOrderProvider;
