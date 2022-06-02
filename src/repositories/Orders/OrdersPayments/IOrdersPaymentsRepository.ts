import { OrderPayment } from "../../../entities/Order/OrderPayment"
import { PagingParam } from "../../../types/Params/Paging/PagingParam"
import { SortParam } from "../../../types/Params/SortParm/SortParam"

export interface ListOrdersPaymentsParams {
    ordersPayments?: Partial<OrderPayment>,
    sort?: SortParam<OrderPayment> | null
    paging?: PagingParam
}

export interface ListOrdersPaymentsResponse {
    ordersPayments: OrderPayment[],
    total: number,
    sort?: SortParam<OrderPayment>,
    paging: PagingParam
}

export type FindOrderPaymentParam = 
    Pick<OrderPayment, 'id' >

export type DeleteOrderPaymentParam = FindOrderPaymentParam

export interface IOrdersPaymentsRepository {
    list(params?: ListOrdersPaymentsParams): Promise<ListOrdersPaymentsResponse>
    find(params: FindOrderPaymentParam): Promise<OrderPayment>
    save(orderPayment: Omit<OrderPayment, 'id' | 'modified' | 'created'>): Promise<{id: number}>
    saveMany(ordersPayments: Omit<OrderPayment, 'id' | 'modified' | 'created'>[]): Promise<{ordersPaymentsCreated: number}>
    update(orderPayment: Partial<Omit<OrderPayment, 'id' | 'orderId' | 'modified' | 'created'>>, id: number): Promise<OrderPayment>
    delete(id: DeleteOrderPaymentParam): Promise<number>
}