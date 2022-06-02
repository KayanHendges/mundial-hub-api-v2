import { OrderProductSold } from "../../../entities/Order/OrderProductSold"
import { PagingParam } from "../../../types/Params/Paging/PagingParam"
import { SortParam } from "../../../types/Params/SortParm/SortParam"

export interface ListOrdersProductsSoldParams {
    ordersProductsSold?: Partial<OrderProductSold>,
    sort?: SortParam<OrderProductSold> | null
    paging?: PagingParam
}

export interface ListOrdersProductsSoldResponse {
    ordersProductsSold: OrderProductSold[],
    total: number,
    sort?: SortParam<OrderProductSold>,
    paging: PagingParam
}

export type FindOrderProductSoldParam = 
    Pick<OrderProductSold, 'id' >

export type DeleteOrderProductSoldParam = FindOrderProductSoldParam

export interface IOrdersProductsSoldRepository {
    list(params?: ListOrdersProductsSoldParams): Promise<ListOrdersProductsSoldResponse>
    find(params: FindOrderProductSoldParam): Promise<OrderProductSold>
    save(orderProductSold: Omit<OrderProductSold, 'id' | 'modified' | 'created'>): Promise<{id: number}>
    saveMany(ordersProductsSold: Omit<OrderProductSold, 'id' | 'modified' | 'created'>[]): Promise<{ordersProductsSoldCreated: number}>
    update(orderProductSold: Partial<Omit<OrderProductSold, 'id' | 'orderId' | 'modified' | 'created'>>, id: number): Promise<OrderProductSold>
    delete(id: DeleteOrderProductSoldParam): Promise<number>
}