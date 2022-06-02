import { Order } from "../../../entities/Order/Order"
import { OrderComplete } from "../../../entities/Order/OrderComplete"
import { PagingParam } from "../../../types/Params/Paging/PagingParam"
import { SortParam } from "../../../types/Params/SortParm/SortParam"

export interface ListOrdersCompleteParams {
    orders?: Partial<Order>,
    sort?: SortParam<Order> | null
    paging?: PagingParam
}

export interface ListOrdersCompleteResponse {
    orders: OrderComplete[],
    total: number,
    sort?: SortParam<Order>,
    paging: PagingParam
}

export type FindOrderCompleteParam = 
    Pick<OrderComplete, 'id' >

export interface IOrdersCompleteRepository {
    list(params?: ListOrdersCompleteParams): Promise<ListOrdersCompleteResponse>
    find(params: FindOrderCompleteParam): Promise<OrderComplete>
    // save(order: Omit<OrderComplete, 'id' | 'modified' | 'created'>): Promise<{id: number}>
    // saveMany(orders: Omit<OrderComplete, 'id' | 'modified' | 'created'>[]): Promise<{ordersCreated: number}>
    // update(order: Partial<Omit<OrderComplete, 'id' | 'modified' | 'created'>>, id: number): Promise<void>
    delete(id: number): Promise<number>
}