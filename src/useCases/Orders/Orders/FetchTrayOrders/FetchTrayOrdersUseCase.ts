import { getTime } from "date-fns";
import { Store } from "../../../../entities/Store/Store";
import { IBasicOrder, ITrayOrderProvider } from "../../../../providers/Tray/Orders/ITrayOrderProvider";
import { IOrdersRepository } from "../../../../repositories/Orders/Orders/IOrdersRepository";
import { IStoreRepository } from "../../../../repositories/Store/IStoreRepository";
import toIntOrNull from "../../../../services/dataFormat/number/toIntOrNull";
import { ImportTrayOrderUseCase } from "../ImportTrayOrder/ImportTrayOrderUseCase";
import { ListTrayOrdersUseCase } from "../ListTrayOrders/ListTrayOrdersUseCase";

interface trayOrdersToImport extends IBasicOrder {
    imported: boolean
}

export class FetchTrayOrdersUseCase {
    constructor(
        private storeRepository: IStoreRepository,
        private importTrayOrderUseCase: ImportTrayOrderUseCase,
        private listTrayOrdersUseCase: ListTrayOrdersUseCase,
    ){}
    
    async execute(): Promise<void>{
        
        const stores = await this.storeRepository.list({ active: true })
        .catch( err => { throw new Error(err) } )

        if(!stores){
            return
        }

        const importTrayOrderUseCase = this.importTrayOrderUseCase
        const listTrayOrdersUseCase =  this.listTrayOrdersUseCase

        await Promise.all(stores?.map( async(store) => {
            await fetchOrders(store)
        }))
        .catch( err => { throw new Error(err) } )

        return

        async function fetchOrders(store: Store){

            const { total: trayOrdersTotal } = await listTrayOrdersUseCase.execute({
                includeImported: false,
                storeCode: store.trayId,
                page: 1,
                limit: 10,
            })

            const { total, orders: trayOrdersToImport } = await listTrayOrdersUseCase.execute({
                includeImported: false,
                storeCode: store.trayId,
                page: 1,
                limit: trayOrdersTotal,
            })

            console.log(`${total} pedidos a serem importados na ${store.name}`)

            await importLoop(trayOrdersToImport.reverse(), 0)
            console.log(`${store.name} - fim da importação de pedidos`)
            
            return

            async function importLoop(list: trayOrdersToImport[], index: number): Promise<void>{
                if(list.length <= index){
                    return
                }

                const start = getTime(new Date())

                const order = list[index]

                const orderId = toIntOrNull(order.id)

                if(!orderId){
                    return importLoop(list, index + 1)
                }

                const success = await importTrayOrderUseCase.execute({
                    storeCode: store.trayId,
                    id: orderId
                })
                .then(() => { return true })
                .catch( err => { 
                    console.log(err)
                    return false
                })

                const end = getTime(new Date())
                const executionTime = end - start

                setTimeout(() => {

                    console.log(`${index+1}/${list.length} pedidos importados da loja ${store.name} - tempo de execução ${executionTime}ms`)
    
                    return importLoop(list, index + 1)

                }, 340 - executionTime)
                
            }
        }

        return
    }
}