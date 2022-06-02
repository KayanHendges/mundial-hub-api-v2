import { IOrdersRepository } from '../../../../repositories/Orders/Orders/IOrdersRepository'
import { IOrdersProductsSoldRepository } from '../../../../repositories/Orders/OrdersProductsSold/IOrdersProductsSoldRepository'
import { CreateOrderProductSoldDataValidate } from './CreateOrderProductSoldDataValidate'
import { CreateOrderProductSoldRequestDTO } from './CreateOrderProductSoldRequestDTO'

export class CreateOrderProductSoldUseCase {
    constructor(
        private createOrderProductSoldDataValidate: CreateOrderProductSoldDataValidate,
        private ordersProductsSoldRepository: IOrdersProductsSoldRepository,
        private ordersRepository: IOrdersRepository
    ){}
    
    async execute(data: CreateOrderProductSoldRequestDTO): Promise<{ createdId: number }>{
        
        try {
            await this.createOrderProductSoldDataValidate.execute(data)
        } catch (err) {
            throw new Error(err)
        }
        
        const { productSold } = data
        
        const orderExists = await this.ordersRepository.find({ id: productSold.orderId })
        .catch( err => { throw new Error(err) } )

        if(!orderExists){
            throw new Error(`the order ${productSold.orderId} does not exists`)
        }

        const { id: createdId } = await this.ordersProductsSoldRepository.save(productSold)
        .catch( err => { throw new Error(err) } )

        if(createdId){
            return { createdId }
        }

        return
    }
}