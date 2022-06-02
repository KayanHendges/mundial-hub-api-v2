import { IOrdersProductsSoldRepository } from '../../../../repositories/Orders/OrdersProductsSold/IOrdersProductsSoldRepository'
import { DeleteOrderProductSoldDataValidate } from './DeleteOrderProductSoldDataValidate'
import { DeleteOrderProductSoldRequestDTO } from './DeleteOrderProductSoldRequestDTO'

export class DeleteOrderProductSoldUseCase {
    constructor(
        private deleteOrderProductSoldDataValidate: DeleteOrderProductSoldDataValidate,
        private ordersProductsSoldRepository: IOrdersProductsSoldRepository
    ){}
    
    async execute(data: DeleteOrderProductSoldRequestDTO): Promise<{ deletedId: number }>{
        
        try {
            await this.deleteOrderProductSoldDataValidate.execute(data)
        } catch (err) {
            throw new Error(err)
        }
        
        const { id } = data

        const deletedId = await this.ordersProductsSoldRepository.delete({ id })
        
        if(deletedId){
            return { deletedId }
        }
    }
}