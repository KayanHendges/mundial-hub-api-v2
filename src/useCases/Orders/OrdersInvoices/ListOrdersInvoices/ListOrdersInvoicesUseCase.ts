import { OrderInvoice } from '../../../../entities/Order/OrderInvoice'
import { IOrdersInvoicesRepository } from '../../../../repositories/Orders/OrdersInvoices/IOrdersInvoicesRepository'
import { ListOrdersInvoicesDataValidate } from './ListOrdersInvoicesDataValidate'
import { ListOrdersInvoicesRequestDTO } from './ListOrdersInvoicesRequestDTO'

export class ListOrdersInvoicesUseCase {
    constructor(
        private listOrdersInvoicesDataValidate: ListOrdersInvoicesDataValidate,
        private ordersInvoicesRepository: IOrdersInvoicesRepository
    ){}
    
    async execute(data: ListOrdersInvoicesRequestDTO): Promise<{ ordersInvoices: OrderInvoice[] }>{
        
        try {
            await this.listOrdersInvoicesDataValidate.execute(data)            
        } catch (err) {
            throw new Error(err)
        }
        
        const { ordersInvoices: fields, paging, sort } = data

        const ordersInvoices = await this.ordersInvoicesRepository.list({
            ordersInvoices: fields,
            paging,
            sort
        })
        .catch( err => { throw new Error(err) } )

        if(ordersInvoices){
            return ordersInvoices
        }

        return
    }
}