import { OrderPayment } from '../../../../entities/Order/OrderPayment'
import { IOrdersPaymentsRepository } from '../../../../repositories/Orders/OrdersPayments/IOrdersPaymentsRepository'
import { DeleteOrderPaymentDataValidate } from './DeleteOrderPaymentDataValidate'
import { DeleteOrderPaymentRequestDTO } from './DeleteOrderPaymentRequestDTO'

export class DeleteOrderPaymentUseCase {
    constructor(
        private deleteOrderPaymentDataValidate: DeleteOrderPaymentDataValidate,
        private ordersPaymentsRepository: IOrdersPaymentsRepository
    ){}
    
    async execute(data: DeleteOrderPaymentRequestDTO): Promise<{ deletedId: number }>{
        
        try {
            await this.deleteOrderPaymentDataValidate.execute(data)
        } catch (err) {
            throw new Error(err)
        }
        
        const { id } = data
        
        const deletedId = await this.ordersPaymentsRepository.delete({ id })
        .catch( err => { throw new Error(err) } )

        if(deletedId){
            return { deletedId }
        }
    }
}