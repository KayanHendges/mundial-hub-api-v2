import { OrderPayment } from '../../../../entities/Order/OrderPayment'
import { IOrdersPaymentsRepository } from '../../../../repositories/Orders/OrdersPayments/IOrdersPaymentsRepository'
import { FindOrderPaymentDataValidate } from './FindOrderPaymentDataValidate'
import { FindOrderPaymentRequestDTO } from './FindOrderPaymentRequestDTO'

export class FindOrderPaymentUseCase {
    constructor(
        private findOrderPaymentDataValidate: FindOrderPaymentDataValidate,
        private ordersPaymentsRepository: IOrdersPaymentsRepository
    ){}
    
    async execute(data: FindOrderPaymentRequestDTO): Promise<OrderPayment>{
        
        try {
            await this.findOrderPaymentDataValidate.execute(data)
        } catch (err) {
            throw new Error(err)
        }
        
        const { id } = data
        
        const orderPayment = await this.ordersPaymentsRepository.find({ id })
        .catch( err => { throw new Error(err) } )

        if(!orderPayment){
            throw new Error(`no order payment with id ${id}`)
        }

        return orderPayment
    }
}