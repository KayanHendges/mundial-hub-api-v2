import { OrderMarketPlaceOrder } from '../../../../entities/Order/OrderMarketPlaceOrder'
import { IOrdersMarketPlacesRepository } from '../../../../repositories/Orders/OrdersMarketPlaces/IOrdersMarketPlacesRepository'
import { ListOrdersMarketPlaceDataValidate } from './ListOrdersMarketPlaceDataValidate'
import { ListOrdersMarketPlaceRequestDTO } from './ListOrdersMarketPlaceRequestDTO'

export class ListOrdersMarketPlaceUseCase {
    constructor(
        private listOrdersMarketPlaceDataValidate: ListOrdersMarketPlaceDataValidate,
        private ordersMarketPlaceRepository: IOrdersMarketPlacesRepository
    ){}
    
    async execute(data: ListOrdersMarketPlaceRequestDTO): Promise<{ordersMarketPlace: OrderMarketPlaceOrder[]}>{
        
        try {
            await this.listOrdersMarketPlaceDataValidate.execute(data)    
        } catch (err) {
            throw new Error(err)
        }
        
        const { ordersMarketPlaces: fields, paging, sort } = data

        const ordersMarketPlace = await this.ordersMarketPlaceRepository.list({
            ordersMarketPlaces: fields,
            paging,
            sort
        })
        .catch( err => { throw new Error(err) } )


        if(ordersMarketPlace){
            return ordersMarketPlace
        }
    }
}