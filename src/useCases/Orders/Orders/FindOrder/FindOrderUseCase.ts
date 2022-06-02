import { Order } from '../../../../entities/Order/Order'
import { IOrdersRepository } from '../../../../repositories/Orders/Orders/IOrdersRepository'
import { FindOrderDataValidate } from './FindOrderDataValidate'
import { FindOrderRequestDTO } from './FindOrderRequestDTO'

export class FindOrderUseCase {
    constructor(
        private findOrderDataValidate: FindOrderDataValidate,
        private ordersRepository: IOrdersRepository
    ){}
    
    async execute(data: FindOrderRequestDTO): Promise<Order>{
        
        try {
            await this.findOrderDataValidate.execute(data)            
        } catch (err) {
            throw new Error(err)
        }
        
        const { id } = data
        
        const order = await this.ordersRepository.find(data)
        .catch( err => { throw new Error(err) } )

        if(order){
            return order
        }
    }
}