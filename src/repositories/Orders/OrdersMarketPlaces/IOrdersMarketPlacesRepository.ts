import { OrderMarketPlaceOrder } from "../../../entities/Order/OrderMarketPlaceOrder"
import { PagingParam } from "../../../types/Params/Paging/PagingParam"
import { SortParam } from "../../../types/Params/SortParm/SortParam"

export interface ListOrdersMarketPlacesParams {
    ordersMarketPlaces?: Partial<OrderMarketPlaceOrder>,
    sort?: SortParam<OrderMarketPlaceOrder> | null
    paging?: PagingParam
}

export interface ListOrdersMarketPlacesResponse {
    ordersMarketPlace: OrderMarketPlaceOrder[],
    total: number,
    sort?: SortParam<OrderMarketPlaceOrder>,
    paging: PagingParam
}

export type FindOrderMarketPlaceOrderParam = 
    Partial<Pick<OrderMarketPlaceOrder, 'id' | 'orderId' >>

export type DeleteOrderMarketPlaceOrderParam = FindOrderMarketPlaceOrderParam

export interface IOrdersMarketPlacesRepository {
    list(params?: ListOrdersMarketPlacesParams): Promise<ListOrdersMarketPlacesResponse>
    find(params: FindOrderMarketPlaceOrderParam): Promise<OrderMarketPlaceOrder>
    save(orderMarketPlaceOrder: Omit<OrderMarketPlaceOrder, 'id' | 'modified' | 'created'>): Promise<{id: number}>
    saveMany(ordersMarketPlaces: Omit<OrderMarketPlaceOrder, 'id' | 'modified' | 'created'>[]): Promise<{ordersMarketPlacesCreated: number}>
    update(orderMarketPlaceOrder: Partial<Omit<OrderMarketPlaceOrder, 'id' | 'orderId' | 'modified' | 'created'>>, id: number): Promise<OrderMarketPlaceOrder>
    delete(id: DeleteOrderMarketPlaceOrderParam): Promise<number>
}