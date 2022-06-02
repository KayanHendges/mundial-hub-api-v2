import { IOrdersRepository } from '../../../../repositories/Orders/Orders/IOrdersRepository'
import { IOrdersPaymentsRepository } from '../../../../repositories/Orders/OrdersPayments/IOrdersPaymentsRepository'
import { CreateOrderPaymentDataValidate } from './CreateOrderPaymentDataValidate'
import { CreateOrderPaymentRequestDTO } from './CreateOrderPaymentRequestDTO'

export class CreateOrderPaymentUseCase {
    constructor(
        private createOrderPaymentDataValidate: CreateOrderPaymentDataValidate,
        private ordersPaymentsRepository: IOrdersPaymentsRepository,
        private ordersRepository: IOrdersRepository
    ){}
    
    async execute(data: CreateOrderPaymentRequestDTO): Promise<{ createdId: number }>{
        
        try {
            this.createOrderPaymentDataValidate.execute(data)
        } catch (err) {
            throw new Error(err)
        }
        
        const { payment } = data

        const orderExists = await this.ordersRepository.find({ id: payment.orderId })
        .catch( err => { throw new Error(err) } )

        if(!orderExists){
            throw new Error(`the order ${payment.orderId} does not exists`)
        }

        const { id: createdId } = await this.ordersPaymentsRepository.save(payment)
        .catch( err => { throw new Error(err) } )

        if(createdId){
            return { createdId }
        }

        return
    }
}