import { OrderMarketPlaceOrder } from '../../../../entities/Order/OrderMarketPlaceOrder'
import { IOrdersMarketPlacesRepository } from '../../../../repositories/Orders/OrdersMarketPlaces/IOrdersMarketPlacesRepository'
import { FindOrderMarketPlaceDataValidate } from './FindOrderMarketPlaceDataValidate'
import { FindOrderMarketPlaceRequestDTO } from './FindOrderMarketPlaceRequestDTO'

export class FindOrderMarketPlaceUseCase {
    constructor(
        private findOrderMarketPlaceDataValidate: FindOrderMarketPlaceDataValidate,
        private ordersMarketPlaceRepository: IOrdersMarketPlacesRepository
    ){}
    
    async execute(data: FindOrderMarketPlaceRequestDTO): Promise<OrderMarketPlaceOrder>{
        
        try {
            await this.findOrderMarketPlaceDataValidate.execute(data)
        } catch (err) {
            throw new Error(err)
        }
        
        const param = data

        const orderMarketPlace = await this.ordersMarketPlaceRepository.find(param)
        .catch( err => { throw new Error(err) } )

        if(orderMarketPlace){
            return orderMarketPlace
        }
    }
}