import { IOrdersFinancesRepository } from '../../../../repositories/Orders/OrdersFinances/IOrdersFinancesRepository'
import { DeleteOrderFinanceDataValidate } from './DeleteOrderFinanceDataValidate'
import { DeleteOrderFinanceRequestDTO } from './DeleteOrderFinanceRequestDTO'

export class DeleteOrderFinanceUseCase {
    constructor(
        private deleteOrderFinanceDataValidate: DeleteOrderFinanceDataValidate,
        private ordersFinancesRepository: IOrdersFinancesRepository
    ){}
    
    async execute(data: DeleteOrderFinanceRequestDTO): Promise<{ deletedId: number }>{
        
        try {
            await this.deleteOrderFinanceDataValidate.execute(data)
        } catch (err) {
            throw new Error(err)
        }
        
        const { id } = data

        const deletedId = await this.ordersFinancesRepository.delete({ id })     
        .catch( err => { throw new Error(err) } )

        if(deletedId){
            return { deletedId }
        }
        
    }
}