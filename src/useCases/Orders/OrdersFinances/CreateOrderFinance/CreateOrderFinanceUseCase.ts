import { IOrdersRepository } from '../../../../repositories/Orders/Orders/IOrdersRepository'
import { IOrdersFinancesRepository } from '../../../../repositories/Orders/OrdersFinances/IOrdersFinancesRepository'
import { CreateOrderFinanceDataValidate } from './CreateOrderFinanceDataValidate'
import { CreateOrderFinanceRequestDTO } from './CreateOrderFinanceRequestDTO'

export class CreateOrderFinanceUseCase {
    constructor(
        private createOrderFinanceDataValidate: CreateOrderFinanceDataValidate,
        private ordersFinancesRepository: IOrdersFinancesRepository,
        private ordersRepository: IOrdersRepository
    ){}
    
    async execute(data: CreateOrderFinanceRequestDTO): Promise<{ createdId: number }>{
        
        try {
            await this.createOrderFinanceDataValidate.execute(data)
        } catch (err) {
            throw new Error(err)
        }
        
        const { finance } = data

        const orderExists = await this.ordersRepository.find({ id: finance.orderId })
        .catch( err => { throw new Error(err) } )

        if(!orderExists){
            throw new Error(`the order ${finance.orderId} does not exists`)
        }
        
        const { id: createdId } = await this.ordersFinancesRepository.save(finance)
        .catch( err => { throw new Error(err) } )

        if(createdId){
            return { createdId }
        }
    }
}