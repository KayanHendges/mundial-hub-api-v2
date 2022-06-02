import { OrderProductSold } from '../../../../entities/Order/OrderProductSold'
import { IOrdersProductsSoldRepository } from '../../../../repositories/Orders/OrdersProductsSold/IOrdersProductsSoldRepository'
import { FindOrderProductSoldDataValidate } from './FindOrderProductSoldDataValidate'
import { FindOrderProductSoldRequestDTO } from './FindOrderProductSoldRequestDTO'

export class FindOrderProductSoldUseCase {
    constructor(
        private findOrderProductSoldDataValidate: FindOrderProductSoldDataValidate,
        private ordersProductsSoldRepository: IOrdersProductsSoldRepository
    ){}
    
    async execute(data: FindOrderProductSoldRequestDTO): Promise<OrderProductSold>{
        
        try {
            await this.findOrderProductSoldDataValidate.execute(data)
        } catch (err) {
            throw new Error(err)
        }
        
        const { id } = data

        const productSold = await this.ordersProductsSoldRepository.find({ id })
        .catch( err => { throw new Error(err) } )

        console.log(productSold)

        if(productSold){
            return productSold
        }
        
        return
    }
}