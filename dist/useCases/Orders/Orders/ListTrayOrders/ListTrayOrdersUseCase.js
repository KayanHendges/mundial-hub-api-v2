"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTrayOrdersUseCase = void 0;
const date_fns_1 = require("date-fns");
const toIntOrNull_1 = __importDefault(require("../../../../services/dataFormat/number/toIntOrNull"));
class ListTrayOrdersUseCase {
    constructor(listTrayOrdersDataValidate, storesRepository, ordersRepository, trayOrdersProvider) {
        this.listTrayOrdersDataValidate = listTrayOrdersDataValidate;
        this.storesRepository = storesRepository;
        this.ordersRepository = ordersRepository;
        this.trayOrdersProvider = trayOrdersProvider;
    }
    async execute(data) {
        try {
            await this.listTrayOrdersDataValidate.execute(data);
        }
        catch (err) {
            throw new Error(err);
        }
        const orders = [];
        const trayOrdersToImport = [];
        const { storeCode, page, limit, includeImported } = data;
        const store = this.storesRepository.findByStoreCode(storeCode)
            .catch(err => { throw new Error(err); });
        if (!store) {
            throw new Error('missing store from database');
        }
        const ordersAlreadySaved = await this.ordersRepository.list({ orders: { storeCode } })
            .then(response => {
            var _a;
            const idList = (_a = response === null || response === void 0 ? void 0 : response.orders) === null || _a === void 0 ? void 0 : _a.map(order => {
                return order.trayOrderId;
            });
            return idList;
        })
            .catch(err => { throw new Error(err); });
        if (!ordersAlreadySaved) {
            throw new Error('missing orders already saved from database');
        }
        const trayOrdersProvider = this.trayOrdersProvider;
        await getOrders(1);
        orders.map(order => {
            if (ordersAlreadySaved.includes((0, toIntOrNull_1.default)(order.id))) {
                if (includeImported) {
                    trayOrdersToImport.push(Object.assign(Object.assign({}, order), { imported: true }));
                }
            }
            else {
                trayOrdersToImport.push(Object.assign(Object.assign({}, order), { imported: false }));
            }
        });
        const responseOrders = trayOrdersToImport.slice((page - 1) * limit, page * limit);
        const totalPages = Math.ceil(trayOrdersToImport.length / limit);
        return {
            total: trayOrdersToImport.length,
            page,
            limit,
            totalPages,
            orders: responseOrders
        };
        async function getOrders(page) {
            return new Promise(async (resolve, reject) => {
                const { orders: trayOrders, limit: trayLimit, page: trayPage, totalOrders, totalPages } = await trayOrdersProvider.list({
                    store: await store,
                    limit: 50,
                    page
                })
                    .catch(err => { throw new Error(err); });
                const start = (0, date_fns_1.getTime)(new Date());
                if (!orders) {
                    throw new Error('missing orders from tray');
                }
                trayOrders.map(order => orders.push(order));
                if (page < totalPages) {
                    const end = (0, date_fns_1.getTime)(new Date());
                    const executionTime = end - start;
                    setTimeout(() => {
                        resolve(getOrders(page + 1));
                    }, 340 - executionTime);
                }
                else {
                    resolve();
                }
            });
        }
    }
}
exports.ListTrayOrdersUseCase = ListTrayOrdersUseCase;
