import { IOrdersMarketPlacesRepository } from '../../../../repositories/Orders/OrdersMarketPlaces/IOrdersMarketPlacesRepository'
import { DeleteOrderMarketPlaceDataValidate } from './DeleteOrderMarketPlaceDataValidate'
import { DeleteOrderMarketPlaceRequestDTO } from './DeleteOrderMarketPlaceRequestDTO'

export class DeleteOrderMarketPlaceUseCase {
    constructor(
        private deleteOrderMarketPlaceDataValidate: DeleteOrderMarketPlaceDataValidate,
        private ordersMarketPlaceRepository: IOrdersMarketPlacesRepository
    ){}
    
    async execute(data: DeleteOrderMarketPlaceRequestDTO): Promise<{ deletedId: number }>{
        
        try {
            await this.deleteOrderMarketPlaceDataValidate.execute(data)
        } catch (err) {
            throw new Error(err)
        }
        
        const { id } = data

        const deletedId = await this.ordersMarketPlaceRepository.delete({ id })
        .catch( err => { throw new Error(err) } )

        if(deletedId){
            return { deletedId }
        }
    }
}