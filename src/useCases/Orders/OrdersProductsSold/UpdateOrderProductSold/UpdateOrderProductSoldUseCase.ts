import { OrderProductSold } from '../../../../entities/Order/OrderProductSold'
import { PrismaOrdersProductsSoldRepository } from '../../../../repositories/Orders/OrdersProductsSold/implementations/PrismaOrdersProductsSoldRepository'
import { UpdateOrderProductSoldDataValidate } from './UpdateOrderProductSoldDataValidate'
import { UpdateOrderProductSoldRequestDTO } from './UpdateOrderProductSoldRequestDTO'

export class UpdateOrderProductSoldUseCase {
    constructor(
        private updateOrderProductSoldDataValidate: UpdateOrderProductSoldDataValidate,
        private ordersProductsSoldRepository: PrismaOrdersProductsSoldRepository
    ){}
    
    async execute(data: UpdateOrderProductSoldRequestDTO): Promise<OrderProductSold>{
        
        try {
            await this.updateOrderProductSoldDataValidate.execute(data)
        } catch (err) {
            throw new Error(err)
        }
        
        const { productSold, id } = data

        const updated = await this.ordersProductsSoldRepository.update(productSold, id)     
        .catch( err => { throw new Error(err) } )

        if(updated){
            return updated
        }
    }
}