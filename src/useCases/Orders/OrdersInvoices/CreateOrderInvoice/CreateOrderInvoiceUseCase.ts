import { IOrdersRepository } from '../../../../repositories/Orders/Orders/IOrdersRepository'
import { IOrdersInvoicesRepository } from '../../../../repositories/Orders/OrdersInvoices/IOrdersInvoicesRepository'
import { CreateOrderInvoiceDataValidate } from './CreateOrderInvoiceDataValidate'
import { CreateOrderInvoiceRequestDTO } from './CreateOrderInvoiceRequestDTO'

export class CreateOrderInvoiceUseCase {
    constructor(
        private createOrderInvoiceDataValidate: CreateOrderInvoiceDataValidate,
        private ordersInvoicesRepository: IOrdersInvoicesRepository,
        private ordersRepository: IOrdersRepository
    ){}
    
    async execute(data: CreateOrderInvoiceRequestDTO): Promise<{ createdId: number }>{
        
        try {
            await this.createOrderInvoiceDataValidate.execute(data)
        } catch (err) {
            throw new Error(err)
        }
        
        const { invoice } = data

        const orderExists = await this.ordersRepository.find({ id: invoice.orderId })
        .catch( err => { throw new Error(err) } )

        if(!orderExists){
            throw new Error(`the order ${invoice.orderId} does not exists`)
        }

        const { id: createdId } = await this.ordersInvoicesRepository.save(invoice)
        .catch( err => { throw new Error(err) } )

        if(createdId){
            return { createdId }
        }

    }
}