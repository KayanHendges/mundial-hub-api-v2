"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportTrayOrderUseCase = void 0;
class ImportTrayOrderUseCase {
    constructor(importTrayOrderDataValidate, storesRepository, trayOrdersProvider, createCustomerFromTrayUseCase, transportersRepository, ordersRepository, ordersPaymentsRepository, ordersInvoiceRepository, ordersFinancesRepository, ordersProductsSoldRepository, ordersNotesRepository, ordersMarketPlacesRepository) {
        this.importTrayOrderDataValidate = importTrayOrderDataValidate;
        this.storesRepository = storesRepository;
        this.trayOrdersProvider = trayOrdersProvider;
        this.createCustomerFromTrayUseCase = createCustomerFromTrayUseCase;
        this.transportersRepository = transportersRepository;
        this.ordersRepository = ordersRepository;
        this.ordersPaymentsRepository = ordersPaymentsRepository;
        this.ordersInvoiceRepository = ordersInvoiceRepository;
        this.ordersFinancesRepository = ordersFinancesRepository;
        this.ordersProductsSoldRepository = ordersProductsSoldRepository;
        this.ordersNotesRepository = ordersNotesRepository;
        this.ordersMarketPlacesRepository = ordersMarketPlacesRepository;
    }
    async execute(data) {
        var _a, _b, _c, _d, _e;
        try {
            await this.importTrayOrderDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const { id, storeCode } = data;
        const store = await this.storesRepository.findByStoreCode(storeCode)
            .catch(err => {
            console.log(err);
            throw new Error(err);
        });
        console.log(`importando pedido ${id} da loja ${store.name}`);
        const order = await this.trayOrdersProvider.findOrderById(store, id);
        const { customer } = order;
        const createCustomer = this.createCustomerFromTrayUseCase.execute({ customer });
        const getChosenTransporterId = getTransporterId(order.chosenTransporterId, this.transportersRepository);
        const { "0": createdCustomer, "1": transporterId } = await Promise.all([createCustomer, getChosenTransporterId])
            .catch(err => {
            console.log(err);
            throw new Error(err);
        });
        const { customerId, billingAddressId, shippingAddressId } = createdCustomer;
        // const { orders } = await this.ordersRepository.list({ orders: {
        //     trayOrderId: order.trayOrderId,
        //     storeCode
        // }})
        // if(orders.length > 0){
        //     throw new Error(`the trayOrderId ${order.trayOrderId} already existis on ${store.name}`)
        // }
        const { id: createdId } = await this.ordersRepository.save({
            trayOrderId: order.trayOrderId,
            storeCode: order.storeCode,
            status: order.status,
            subtotal: order.subtotal,
            taxes: order.taxes,
            discount: order.discount,
            paymentMethod: order === null || order === void 0 ? void 0 : order.paymentMethod,
            paymentMethodDiscount: order.paymentMethodDiscount,
            discountCoupon: order.discountCoupon,
            coupon: order.coupon,
            total: order.total,
            localSale: order.localSale,
            chosenTransporterId: transporterId,
            chosenShippingType: order.chosenShippingType,
            chosenShippingValue: order.chosenShippingValue,
            deliveryTimeMin: order.deliveryTimeMin,
            deliveryTimeMax: order.deliveryTimeMax,
            transporterId: null,
            shippingCost: order.shippingCost,
            dispatchedDate: order.dispatchedDate,
            deliveredDate: order.deliveredDate,
            partnerId: order.partnerId,
            customerId,
            shippingAddressId,
            billingAddressId,
            paid: order.paid,
            modified: order.modified,
            created: order.created,
        })
            .catch(err => { throw new Error(err); });
        if (!createdId) {
            throw new Error('error creating new Order');
        }
        const payments = Promise.all((_a = order.payments) === null || _a === void 0 ? void 0 : _a.map(async (payment) => {
            await this.ordersPaymentsRepository.save({
                orderId: createdId,
                value: payment === null || payment === void 0 ? void 0 : payment.value,
                method: payment === null || payment === void 0 ? void 0 : payment.method,
                date: payment === null || payment === void 0 ? void 0 : payment.date,
            });
            return;
        }))
            .catch(err => { throw new Error(err); });
        const invoices = Promise.all((_b = order.invoices) === null || _b === void 0 ? void 0 : _b.map(async (invoice) => {
            await this.ordersInvoiceRepository.save({
                orderId: createdId,
                cnpj: invoice === null || invoice === void 0 ? void 0 : invoice.cnpj,
                number: invoice === null || invoice === void 0 ? void 0 : invoice.number,
                key: invoice === null || invoice === void 0 ? void 0 : invoice.key,
                link: invoice === null || invoice === void 0 ? void 0 : invoice.link,
            });
            return;
        }))
            .catch(err => { throw new Error(err); });
        const finances = Promise.all((_c = order.finances) === null || _c === void 0 ? void 0 : _c.map(async (finance) => {
            await this.ordersFinancesRepository.save({
                orderId: createdId,
                applied: finance === null || finance === void 0 ? void 0 : finance.applied,
                type: finance === null || finance === void 0 ? void 0 : finance.type,
                value: finance === null || finance === void 0 ? void 0 : finance.value,
                date: finance === null || finance === void 0 ? void 0 : finance.date
            });
            return;
        }))
            .catch(err => { throw new Error(err); });
        const productsSold = Promise.all((_d = order.productsSold) === null || _d === void 0 ? void 0 : _d.map(async (product) => {
            await this.ordersProductsSoldRepository.save({
                orderId: createdId,
                reference: product === null || product === void 0 ? void 0 : product.reference,
                quantity: product === null || product === void 0 ? void 0 : product.quantity,
                name: product === null || product === void 0 ? void 0 : product.name,
                kitId: product === null || product === void 0 ? void 0 : product.kitId,
                trayKitId: product === null || product === void 0 ? void 0 : product.trayKitId,
                productId: product === null || product === void 0 ? void 0 : product.productId,
                trayId: product === null || product === void 0 ? void 0 : product.trayId,
                cost: product === null || product === void 0 ? void 0 : product.cost,
                paidPrice: product === null || product === void 0 ? void 0 : product.paidPrice,
                price: product === null || product === void 0 ? void 0 : product.price,
            });
            return;
        }))
            .catch(err => { throw new Error(err); });
        const notes = Promise.all((_e = order.notes) === null || _e === void 0 ? void 0 : _e.map(async (note) => {
            await this.ordersNotesRepository.save({
                orderId: createdId,
                by: note === null || note === void 0 ? void 0 : note.by,
                description: note === null || note === void 0 ? void 0 : note.description
            });
            return;
        }))
            .catch(err => { throw new Error(err); });
        const marketPlaceOrder = order.marketPlaceOrder;
        const saveMarketPlaceOrder = marketPlaceOrder ? await this.ordersMarketPlacesRepository.save({
            orderId: createdId,
            marketPlaceOrderId: marketPlaceOrder === null || marketPlaceOrder === void 0 ? void 0 : marketPlaceOrder.marketPlaceOrderId,
            name: marketPlaceOrder === null || marketPlaceOrder === void 0 ? void 0 : marketPlaceOrder.name,
            link: marketPlaceOrder === null || marketPlaceOrder === void 0 ? void 0 : marketPlaceOrder.link
        }) : null;
        Promise.all([payments, invoices, finances, productsSold, notes, saveMarketPlaceOrder])
            .catch(err => { throw new Error(err); });
        return { createdId };
        async function getTransporterId(externalId, transportersRepository) {
            if (!externalId) {
                return null;
            }
            const transporter = await transportersRepository.find({ externalId })
                .catch(err => { throw new Error(err); });
            const id = transporter === null || transporter === void 0 ? void 0 : transporter.id;
            if (!id) {
                return null;
            }
            return id;
        }
    }
}
exports.ImportTrayOrderUseCase = ImportTrayOrderUseCase;
