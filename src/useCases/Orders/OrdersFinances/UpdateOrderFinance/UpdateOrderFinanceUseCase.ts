import { OrderFinance } from '../../../../entities/Order/OrderFinance'
import { IOrdersFinancesRepository } from '../../../../repositories/Orders/OrdersFinances/IOrdersFinancesRepository'
import { UpdateOrderFinanceDataValidate } from './UpdateOrderFinanceDataValidate'
import { UpdateOrderFinanceRequestDTO } from './UpdateOrderFinanceRequestDTO'

export class UpdateOrderFinanceUseCase {
    constructor(
        private updateOrderFinanceDataValidate: UpdateOrderFinanceDataValidate,
        private ordersFinancesRepository: IOrdersFinancesRepository
    ){}
    
    async execute(data: UpdateOrderFinanceRequestDTO): Promise<{updated: OrderFinance}>{
        
        try {
            await this.updateOrderFinanceDataValidate.execute(data)
        } catch (err) {
            throw new Error(err)
        }
        
        const { finance, id } = data

        const updated = await this.ordersFinancesRepository.update(finance, id)
        .catch( err => { throw new Error(err) } )

        if(updated){
            return { updated }
        }
        
        return
    }
}