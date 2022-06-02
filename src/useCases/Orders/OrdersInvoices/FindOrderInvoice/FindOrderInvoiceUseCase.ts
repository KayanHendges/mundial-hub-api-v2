import { OrderInvoice } from '../../../../entities/Order/OrderInvoice'
import { IOrdersInvoicesRepository } from '../../../../repositories/Orders/OrdersInvoices/IOrdersInvoicesRepository'
import { FindOrderInvoiceDataValidate } from './FindOrderInvoiceDataValidate'
import { FindOrderInvoiceRequestDTO } from './FindOrderInvoiceRequestDTO'

export class FindOrderInvoiceUseCase {
    constructor(
        private findOrderInvoiceDataValidate: FindOrderInvoiceDataValidate,
        private ordersInvoicesRepository: IOrdersInvoicesRepository
    ){}
    
    async execute(data: FindOrderInvoiceRequestDTO): Promise<OrderInvoice>{
        
        try {
            await this.findOrderInvoiceDataValidate.execute(data)
        } catch (err) {
            throw new Error(err)
        }
        
        const { id } = data

        const invoice = await this.ordersInvoicesRepository.find({ id })
        .catch( err => { throw new Error(err) } )

        if(!invoice){
            throw new Error(`no order invoice with id ${id}`)
        }
        
        return invoice
    }
}