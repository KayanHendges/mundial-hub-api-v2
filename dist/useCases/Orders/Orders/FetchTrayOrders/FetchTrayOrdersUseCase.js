"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchTrayOrdersUseCase = void 0;
const date_fns_1 = require("date-fns");
const toIntOrNull_1 = __importDefault(require("../../../../services/dataFormat/number/toIntOrNull"));
class FetchTrayOrdersUseCase {
    constructor(storeRepository, importTrayOrderUseCase, listTrayOrdersUseCase) {
        this.storeRepository = storeRepository;
        this.importTrayOrderUseCase = importTrayOrderUseCase;
        this.listTrayOrdersUseCase = listTrayOrdersUseCase;
    }
    async execute() {
        const stores = await this.storeRepository.list({ active: true })
            .catch(err => { throw new Error(err); });
        if (!stores) {
            return;
        }
        const importTrayOrderUseCase = this.importTrayOrderUseCase;
        const listTrayOrdersUseCase = this.listTrayOrdersUseCase;
        await Promise.all(stores === null || stores === void 0 ? void 0 : stores.map(async (store) => {
            await fetchOrders(store);
        }))
            .catch(err => { throw new Error(err); });
        return;
        async function fetchOrders(store) {
            const { total: trayOrdersTotal } = await listTrayOrdersUseCase.execute({
                includeImported: false,
                storeCode: store.trayId,
                page: 1,
                limit: 10,
            });
            const { total, orders: trayOrdersToImport } = await listTrayOrdersUseCase.execute({
                includeImported: false,
                storeCode: store.trayId,
                page: 1,
                limit: trayOrdersTotal,
            });
            console.log(`${total} pedidos a serem importados na ${store.name}`);
            await importLoop(trayOrdersToImport.reverse(), 0);
            console.log(`${store.name} - fim da importação de pedidos`);
            return;
            async function importLoop(list, index) {
                if (list.length <= index) {
                    return;
                }
                const start = (0, date_fns_1.getTime)(new Date());
                const order = list[index];
                const orderId = (0, toIntOrNull_1.default)(order.id);
                if (!orderId) {
                    return importLoop(list, index + 1);
                }
                const success = await importTrayOrderUseCase.execute({
                    storeCode: store.trayId,
                    id: orderId
                })
                    .then(() => { return true; })
                    .catch(err => {
                    console.log(err);
                    return false;
                });
                const end = (0, date_fns_1.getTime)(new Date());
                const executionTime = end - start;
                setTimeout(() => {
                    console.log(`${index + 1}/${list.length} pedidos importados da loja ${store.name} - tempo de execução ${executionTime}ms`);
                    return importLoop(list, index + 1);
                }, 340 - executionTime);
            }
        }
        return;
    }
}
exports.FetchTrayOrdersUseCase = FetchTrayOrdersUseCase;
