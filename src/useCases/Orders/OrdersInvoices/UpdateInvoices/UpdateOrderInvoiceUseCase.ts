import { OrderInvoice } from '../../../../entities/Order/OrderInvoice'
import { IOrdersInvoicesRepository } from '../../../../repositories/Orders/OrdersInvoices/IOrdersInvoicesRepository'
import { UpdateOrderInvoiceDataValidate } from './UpdateOrderInvoiceDataValidate'
import { UpdateOrderInvoiceRequestDTO } from './UpdateOrderInvoiceRequestDTO'

export class UpdateOrderInvoiceUseCase {
    constructor(
        private updateOrderInvoiceDataValidate: UpdateOrderInvoiceDataValidate,
        private ordersInvoicesRepository: IOrdersInvoicesRepository
    ){}
    
    async execute(data: UpdateOrderInvoiceRequestDTO): Promise<OrderInvoice>{
        
        try {
            await this.updateOrderInvoiceDataValidate.execute(data)
        } catch (err) {
            throw new Error(err)
        }
        
        const { invoice, id } = data

        const updated = await this.ordersInvoicesRepository.update(invoice, id)        
        .catch( err => { throw new Error(err) } )

        if(updated){
            return updated
        }
    }
}