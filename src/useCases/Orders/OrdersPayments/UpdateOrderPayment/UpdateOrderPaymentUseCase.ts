import { OrderPayment } from '../../../../entities/Order/OrderPayment'
import { IOrdersPaymentsRepository } from '../../../../repositories/Orders/OrdersPayments/IOrdersPaymentsRepository'
import { UpdateOrderPaymentDataValidate } from './UpdateOrderPaymentDataValidate'
import { UpdateOrderPaymentRequestDTO } from './UpdateOrderPaymentRequestDTO'

export class UpdateOrderPaymentUseCase {
    constructor(
        private updateOrderPaymentDataValidate: UpdateOrderPaymentDataValidate,
        private ordersPaymentsRepository: IOrdersPaymentsRepository
    ){}
    
    async execute(data: UpdateOrderPaymentRequestDTO): Promise<OrderPayment>{
        
        try {
            this.updateOrderPaymentDataValidate.execute(data)
        } catch (err) {
            throw new Error(err)
        }
        
        const { id } = data
        const { payment } = data

        const updated = await this.ordersPaymentsRepository.update(payment, id)
        .catch( err => { throw new Error(err) } )

        if(updated){
            return updated
        }
        
        return
    }
}