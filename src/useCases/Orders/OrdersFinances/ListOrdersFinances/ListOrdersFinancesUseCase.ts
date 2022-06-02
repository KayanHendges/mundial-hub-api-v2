import { OrderFinance } from '../../../../entities/Order/OrderFinance'
import { IOrdersFinancesRepository } from '../../../../repositories/Orders/OrdersFinances/IOrdersFinancesRepository'
import { ListOrdersFinancesDataValidate } from './ListOrdersFinancesDataValidate'
import { ListOrdersFinancesRequestDTO } from './ListOrdersFinancesRequestDTO'

export class ListOrdersFinancesUseCase {
    constructor(
        private listOrdersFinancesDataValidate: ListOrdersFinancesDataValidate,
        private ordersFinancesRepository: IOrdersFinancesRepository
    ){}
    
    async execute(data: ListOrdersFinancesRequestDTO): Promise<{ ordersFinances: OrderFinance[] }>{
        
        try {
            await this.listOrdersFinancesDataValidate.execute(data)
        } catch (err) {
            throw new Error(err)
        }
        
        const { finances: fields, paging, sort } = data
        
        const finances = await this.ordersFinancesRepository.list({
            ordersFinances: fields,
            sort,
            paging
        })
        .catch( err => { throw new Error(err) } )

        if(finances){
            return finances
        }
    }
}