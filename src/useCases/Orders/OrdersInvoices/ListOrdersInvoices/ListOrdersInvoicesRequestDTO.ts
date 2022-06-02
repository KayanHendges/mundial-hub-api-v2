import { OrderInvoice } from "../../../../entities/Order/OrderInvoice"
import { PagingParam } from "../../../../types/Params/Paging/PagingParam"
import { SortParam } from "../../../../types/Params/SortParm/SortParam"

export interface ListOrdersInvoicesRequestDTO {
    ordersInvoices: Partial<OrderInvoice>
    sort?: SortParam<OrderInvoice>
    paging: PagingParam
}