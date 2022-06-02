import { OrderPayment } from '../../../../entities/Order/OrderPayment'
import { IOrdersPaymentsRepository } from '../../../../repositories/Orders/OrdersPayments/IOrdersPaymentsRepository'
import { ListOrdersPaymentsDataValidate } from './ListOrdersPaymentsDataValidate'
import { ListOrdersPaymentsRequestDTO } from './ListOrdersPaymentsRequestDTO'

export class ListOrdersPaymentsUseCase {
    constructor(
        private listOrdersPaymentsDataValidate: ListOrdersPaymentsDataValidate,
        private ordersPaymentsRepository: IOrdersPaymentsRepository
    ){}
    
    async execute(data: ListOrdersPaymentsRequestDTO): Promise<{ordersPayments: OrderPayment[]}>{
        
        try {
            await this.listOrdersPaymentsDataValidate.execute(data)
        } catch (err) {
            throw new Error(err)
        }

        const { ordersPayments: fields, paging, sort } = data
        
        const ordersPayments = await this.ordersPaymentsRepository.list({
            ordersPayments: fields,
            paging,
            sort
        })
        .catch( err => { throw new Error(err) } )

        if(ordersPayments){
            return ordersPayments
        }

        return
    }
}