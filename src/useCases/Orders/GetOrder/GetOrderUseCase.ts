import { ITrayOrderProvider } from "../../../providers/Tray/Orders/ITrayOrderProvider";
import { IStoreRepository } from "../../../repositories/Store/IStoreRepository";
import { GetOrderRequestDTO } from "./GetOrderRequestDTO";

export class GetOrderUseCase {
    constructor(
        private storeRepository: IStoreRepository,
        private orderProvider: ITrayOrderProvider
    ){}

    async execute(data: GetOrderRequestDTO){
        
        const orderId = parseInt(data.order_id)
        const storeCode = parseInt(data.store_code)

        if(isNaN(orderId)){
            throw new Error('missing order_id')
        }

        if(isNaN(storeCode)){
            throw new Error('missing store_code')
        }

        const store = await this.storeRepository.findByStoreCode(storeCode)
        .catch(err => { throw new Error('error getting store from database') })

        const order = await this.orderProvider.findOrderById(store, orderId)
        .catch(err => { throw new Error(err) })

        if(!order){ 
            throw new Error('no orders found')
        }

        return order
    }
}