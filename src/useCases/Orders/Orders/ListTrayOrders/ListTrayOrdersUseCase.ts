import { getTime } from "date-fns";
import { IBasicOrder, ITrayOrderProvider } from "../../../../providers/Tray/Orders/ITrayOrderProvider";
import { IOrdersRepository } from "../../../../repositories/Orders/Orders/IOrdersRepository";
import { IStoreRepository } from "../../../../repositories/Store/IStoreRepository";
import toIntOrNull from "../../../../services/dataFormat/number/toIntOrNull";
import { ListTrayOrdersDataValidate } from "./ListTrayOrdersDataValidate";
import { ListTrayOrdersRequestDTO } from "./ListTrayOrdersRequestDTO";

interface trayOrdersToImport extends IBasicOrder {
    imported: boolean
}

interface OrdersReponse {
    total: number,
    page: number,
    limit: number,
    totalPages: number,
    orders: trayOrdersToImport[]
}

export class ListTrayOrdersUseCase {
    constructor(
        private listTrayOrdersDataValidate: ListTrayOrdersDataValidate,
        private storesRepository: IStoreRepository,
        private ordersRepository: IOrdersRepository,
        private trayOrdersProvider: ITrayOrderProvider,
    ){}

    async execute(data: ListTrayOrdersRequestDTO): Promise<OrdersReponse>{

        try {
            await this.listTrayOrdersDataValidate.execute(data)
        } catch (err) {
            throw new Error(err)
        }
        
        const orders: IBasicOrder[] = []
        const trayOrdersToImport: trayOrdersToImport[] = []

        const { storeCode, page, limit, includeImported } = data

        const store = this.storesRepository.findByStoreCode(storeCode)
        .catch(err => { throw new Error(err) })

        if(!store){
            throw new Error('missing store from database')
        }

        const ordersAlreadySaved = await this.ordersRepository.list({ orders: { storeCode } })
        .then(response => {
            const idList = response?.orders?.map(order => {
                return order.trayOrderId
            })

            return idList
        })
        .catch( err => { throw new Error(err) } )

        if(!ordersAlreadySaved){
            throw new Error('missing orders already saved from database')
        }

        const trayOrdersProvider = this.trayOrdersProvider
        await getOrders(1)

        orders.map( order => {
            if(ordersAlreadySaved.includes(toIntOrNull(order.id))){
                if(includeImported){
                    trayOrdersToImport.push({
                        ...order,
                        imported: true
                    })
                }
            } else {
                trayOrdersToImport.push({
                    ...order,
                    imported: false
                })
            }
        })

        const responseOrders = trayOrdersToImport.slice((page-1)*limit, page*limit)
        
        const totalPages = Math.ceil(trayOrdersToImport.length / limit)

        return {
            total: trayOrdersToImport.length,
            page,
            limit,
            totalPages,
            orders: responseOrders
        }

        async function getOrders(page: number): Promise<void>{
            return new Promise(async(resolve, reject) => {

                const { orders: trayOrders, limit: trayLimit, page: trayPage, totalOrders, totalPages } = await trayOrdersProvider.list({
                    store: await store,
                    limit: 50,
                    page
                })
                .catch( err => { throw new Error(err) } )
                const start = getTime(new Date())

                if(!orders){
                    throw new Error('missing orders from tray')
                }

                trayOrders.map(order => orders.push(order))

                if(page < totalPages){
                    const end = getTime(new Date())
                    const executionTime = end - start

                    setTimeout(() => {
                        resolve(getOrders(page+1))
                    }, 340 - executionTime)
                } else {
                    resolve()
                }
            })
        }
    }
}