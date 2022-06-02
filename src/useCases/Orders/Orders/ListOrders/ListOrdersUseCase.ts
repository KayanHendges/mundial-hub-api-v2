import { Order } from '../../../../entities/Order/Order'
import { IOrdersRepository } from '../../../../repositories/Orders/Orders/IOrdersRepository'
import { ListOrdersDataValidate } from './ListOrdersDataValidate'
import { ListOrdersRequestDTO } from './ListOrdersRequestDTO'

export class ListOrdersUseCase {
    constructor(
        private listOrdersDataValidate: ListOrdersDataValidate,
        private ordersRepository: IOrdersRepository
    ){}
    
    async execute(data: ListOrdersRequestDTO): Promise<{ orders: Order[] }>{
        
        try {
            await this.listOrdersDataValidate.execute(data)
        } catch (err) {
            throw new Error(err)
        }
        
        const { orders: fields, paging, sort } = data

        const ordersList = await this.ordersRepository.list({
            orders: fields,
            paging,
            sort
        })        
        .catch( err => { throw new Error(err) } )

        if(ordersList){
            return ordersList
        }

        return
    }
}