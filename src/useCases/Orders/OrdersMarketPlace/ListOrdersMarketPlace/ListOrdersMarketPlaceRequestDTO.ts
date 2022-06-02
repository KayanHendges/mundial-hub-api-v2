import { OrderMarketPlaceOrder } from "../../../../entities/Order/OrderMarketPlaceOrder";
import { PagingParam } from "../../../../types/Params/Paging/PagingParam";
import { SortParam } from "../../../../types/Params/SortParm/SortParam";

export interface ListOrdersMarketPlaceRequestDTO {
    ordersMarketPlaces: Partial<OrderMarketPlaceOrder>
    sort?: SortParam<OrderMarketPlaceOrder>
    paging: PagingParam
}