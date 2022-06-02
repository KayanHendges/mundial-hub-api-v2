import { OrderPayment } from "../../../../entities/Order/OrderPayment"
import { PagingParam } from "../../../../types/Params/Paging/PagingParam"
import { SortParam } from "../../../../types/Params/SortParm/SortParam"

export interface ListOrdersPaymentsRequestDTO {
    ordersPayments: Partial<OrderPayment>
    sort?: SortParam<OrderPayment>,
    paging: PagingParam
}