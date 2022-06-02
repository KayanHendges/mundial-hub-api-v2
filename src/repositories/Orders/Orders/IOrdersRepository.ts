import { Order } from "../../../entities/Order/Order"
import { PagingParam } from "../../../types/Params/Paging/PagingParam"
import { SortParam } from "../../../types/Params/SortParm/SortParam"

export interface ListOrdersParams {
    orders?: Partial<Order>,
    sort?: SortParam<Order> | null
    paging?: PagingParam
}

export interface ListOrdersResponse {
    orders: Order[],
    total: number,
    sort?: SortParam<Order>,
    paging: PagingParam
}

export type FindOrderParam = 
    Pick<Order, 'id' >

export interface IOrdersRepository {
    list(params?: ListOrdersParams): Promise<ListOrdersResponse>
    find(params: FindOrderParam): Promise<Order>
    save(order: Omit<Order, 'id'>): Promise<{id: number}>
    saveMany(orders: Omit<Order, 'id' | 'modified' | 'created'>[]): Promise<{ordersCreated: number}>
    update(order: Partial<Omit<Order, 'id' | 'modified' | 'created'>>, id: number): Promise<void>
    delete(id: number): Promise<void>
}