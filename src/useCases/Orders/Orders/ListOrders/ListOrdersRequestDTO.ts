import { Order } from "../../../../entities/Order/Order";
import { PagingParam } from "../../../../types/Params/Paging/PagingParam";
import { SortParam } from "../../../../types/Params/SortParm/SortParam";

export interface ListOrdersRequestDTO {
    orders: Partial<Order>
    sort?: SortParam<Order>
    paging: PagingParam
}