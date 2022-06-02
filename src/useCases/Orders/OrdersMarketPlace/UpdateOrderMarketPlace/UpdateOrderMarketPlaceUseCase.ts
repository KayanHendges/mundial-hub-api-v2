import { OrderMarketPlaceOrder } from '../../../../entities/Order/OrderMarketPlaceOrder'
import { IOrdersMarketPlacesRepository } from '../../../../repositories/Orders/OrdersMarketPlaces/IOrdersMarketPlacesRepository'
import { UpdateOrderMarketPlaceDataValidate } from './UpdateOrderMarketPlaceDataValidate'
import { UpdateOrderMarketPlaceRequestDTO } from './UpdateOrderMarketPlaceRequestDTO'

export class UpdateOrderMarketPlaceUseCase {
    constructor(
        private updateOrderMarketPlaceDataValidate: UpdateOrderMarketPlaceDataValidate,
        private ordersMarketPlaceRepository: IOrdersMarketPlacesRepository
    ){}
    
    async execute(data: UpdateOrderMarketPlaceRequestDTO): Promise<{ updated: OrderMarketPlaceOrder }>{
        
        try {
            await this.updateOrderMarketPlaceDataValidate.execute(data)
        } catch (err) {
            throw new Error(err)
        }
        
        const { id, orderMarketPlace } = data
        
        const updated = await this.ordersMarketPlaceRepository.update(orderMarketPlace, id)

        if(updated){
            return { updated }
        }

        return
    }
}