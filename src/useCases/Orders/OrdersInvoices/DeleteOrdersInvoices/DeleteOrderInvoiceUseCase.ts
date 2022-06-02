import { IOrdersInvoicesRepository } from '../../../../repositories/Orders/OrdersInvoices/IOrdersInvoicesRepository'
import { DeleteOrderInvoiceDataValidate } from './DeleteOrderInvoiceDataValidate'
import { DeleteOrderInvoiceRequestDTO } from './DeleteOrderInvoiceRequestDTO'

export class DeleteOrderInvoiceUseCase {
    constructor(
        private deleteOrderInvoiceDataValidate: DeleteOrderInvoiceDataValidate,
        private ordersInvoicesRepository: IOrdersInvoicesRepository
    ){}
    
    async execute(data: DeleteOrderInvoiceRequestDTO): Promise<{ deletedId: number }>{
        
        try {
            await this.deleteOrderInvoiceDataValidate.execute(data)
        } catch (err) {
            throw new Error(err)
        }
        
        const { id } = data
        
        const deletedId = await this.ordersInvoicesRepository.delete({ id })
        .catch( err => { throw new Error(err) } )
        
        if(deletedId){
            return { deletedId }
        }

        return
    }
}