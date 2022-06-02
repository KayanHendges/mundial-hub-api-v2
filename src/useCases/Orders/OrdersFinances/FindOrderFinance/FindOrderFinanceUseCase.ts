import { OrderFinance } from '../../../../entities/Order/OrderFinance'
import { IOrdersFinancesRepository } from '../../../../repositories/Orders/OrdersFinances/IOrdersFinancesRepository'
import { FindOrderFinanceDataValidate } from './FindOrderFinanceDataValidate'
import { FindOrderFinanceRequestDTO } from './FindOrderFinanceRequestDTO'

export class FindOrderFinanceUseCase {
    constructor(
        private findOrderFinanceDataValidate: FindOrderFinanceDataValidate,
        private ordersFinancesRepository: IOrdersFinancesRepository
    ){}
    
    async execute(data: FindOrderFinanceRequestDTO): Promise<OrderFinance>{
        
        try {
            await this.findOrderFinanceDataValidate.execute(data)
        } catch (err) {
            throw new Error(err)
        }

        const { id } = data
        
        const OrderFinance = await this.ordersFinancesRepository.find({ id })
        .catch( err => { throw new Error(err) } )    
    
        if(OrderFinance){
            return OrderFinance
        }
    }
}