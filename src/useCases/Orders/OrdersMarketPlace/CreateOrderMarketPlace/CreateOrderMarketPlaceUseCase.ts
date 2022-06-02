import { IOrdersRepository } from '../../../../repositories/Orders/Orders/IOrdersRepository'
import { IOrdersMarketPlacesRepository } from '../../../../repositories/Orders/OrdersMarketPlaces/IOrdersMarketPlacesRepository'
import { CreateOrderMarketPlaceDataValidate } from './CreateOrderMarketPlaceDataValidate'
import { CreateOrderMarketPlaceRequestDTO } from './CreateOrderMarketPlaceRequestDTO'

export class CreateOrderMarketPlaceUseCase {
    constructor(
        private createOrderMarketPlaceDataValidate: CreateOrderMarketPlaceDataValidate,
        private ordersRepository: IOrdersRepository,
        private ordersMarketPlaceRepository: IOrdersMarketPlacesRepository,
    ){}
    
    async execute(data: CreateOrderMarketPlaceRequestDTO): Promise<{ createdId: number }>{
        
        try {
            await this.createOrderMarketPlaceDataValidate.execute(data)
        } catch (err) {
            throw new Error(err)
        }
        
        const { orderMarketPlace } = data

        const orderExists = await this.ordersRepository.find({ id: orderMarketPlace.orderId })
        .catch( err => { throw new Error(err) } )

        if(!orderExists){
            throw new Error(`the order ${orderMarketPlace.orderId} does not exists`)
        }

        const { id: createdId } = await this.ordersMarketPlaceRepository.save( orderMarketPlace )
        .catch( err => { throw new Error(err) } )

        if(createdId){
            return { createdId }
        }
        
        return
    }
}