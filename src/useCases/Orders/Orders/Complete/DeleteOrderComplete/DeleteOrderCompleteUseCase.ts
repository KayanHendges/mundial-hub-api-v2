import { IOrdersCompleteRepository } from '../../../../../repositories/Orders/OrdersComplete/IOrdersCompleteRepository'
import { DeleteOrderCompleteDataValidate } from './DeleteOrderCompleteDataValidate'
import { DeleteOrderCompleteRequestDTO } from './DeleteOrderCompleteRequestDTO'

export class DeleteOrderCompleteUseCase {
    constructor(
        private deleteOrderCompleteDataValidate: DeleteOrderCompleteDataValidate,
        private ordersCompleteRepository: IOrdersCompleteRepository
    ){}
    
    async execute(data: DeleteOrderCompleteRequestDTO): Promise<{ deletedId: number }>{
        
        try {
            await this.deleteOrderCompleteDataValidate.execute(data)
        } catch (err) {
            throw new Error(err)
        }
        
        const { id } = data

        const deletedId = await this.ordersCompleteRepository.delete(id)
        .catch( err => { throw new Error(err) } )

        if(deletedId){
            return { deletedId }
        }

        return
    }
}