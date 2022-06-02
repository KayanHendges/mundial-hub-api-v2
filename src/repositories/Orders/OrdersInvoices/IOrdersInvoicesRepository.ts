
import { OrderInvoice } from "../../../entities/Order/OrderInvoice"
import { PagingParam } from "../../../types/Params/Paging/PagingParam"
import { SortParam } from "../../../types/Params/SortParm/SortParam"

export interface ListOrdersInvoicesParams {
    ordersInvoices?: Partial<OrderInvoice>,
    sort?: SortParam<OrderInvoice> | null
    paging?: PagingParam
}

export interface ListOrdersInvoicesResponse {
    ordersInvoices: OrderInvoice[],
    total: number,
    sort?: SortParam<OrderInvoice>,
    paging: PagingParam
}

export type FindOrderInvoicesParam = 
    Pick<OrderInvoice, 'id' >

export type DeleteOrderInvoicesParam = FindOrderInvoicesParam

export interface IOrdersInvoicesRepository {
    list(params?: ListOrdersInvoicesParams): Promise<ListOrdersInvoicesResponse>
    find(params: FindOrderInvoicesParam): Promise<OrderInvoice>
    save(orderInvoice: Omit<OrderInvoice, 'id' | 'modified' | 'created'>): Promise<{id: number}>
    saveMany(ordersInvoices: Omit<OrderInvoice, 'id' | 'modified' | 'created'>[]): Promise<{ordersInvoicesCreated: number}>
    update(orderInvoice: Partial<Omit<OrderInvoice, 'id' | 'orderId' | 'modified' | 'created'>>, id: number): Promise<OrderInvoice>
    delete(id: DeleteOrderInvoicesParam): Promise<number>
}