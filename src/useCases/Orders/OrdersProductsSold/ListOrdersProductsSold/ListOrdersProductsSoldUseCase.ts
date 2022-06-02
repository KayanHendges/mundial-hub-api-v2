import { OrderProductSold } from '../../../../entities/Order/OrderProductSold'
import { IOrdersProductsSoldRepository } from '../../../../repositories/Orders/OrdersProductsSold/IOrdersProductsSoldRepository'
import { ListOrdersProductsSoldDataValidate } from './ListOrdersProductsSoldDataValidate'
import { ListOrdersProductsSoldRequestDTO } from './ListOrdersProductsSoldRequestDTO'

export class ListOrdersProductsSoldUseCase {
    constructor(
        private listOrdersProductsSoldDataValidate: ListOrdersProductsSoldDataValidate,
        private ordersProductsSoldRepository: IOrdersProductsSoldRepository
    ){}
    
    async execute(data: ListOrdersProductsSoldRequestDTO): Promise<{ ordersProductsSold: OrderProductSold[] }>{
        
        try {
            await this.listOrdersProductsSoldDataValidate.execute(data)    
        } catch (err) {
            throw new Error(err)
        }
        
        const { productsSold: fields, paging, sort } = data

        const products = await this.ordersProductsSoldRepository.list({
            ordersProductsSold: fields,
            paging,
            sort
        })
        .catch( err => { throw new Error(err) } )

        if(products){
            return products
        }
    }
}