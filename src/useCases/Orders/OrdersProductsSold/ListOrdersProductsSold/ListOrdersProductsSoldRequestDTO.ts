import { OrderProductSold } from "../../../../entities/Order/OrderProductSold";
import { PagingParam } from "../../../../types/Params/Paging/PagingParam";
import { SortParam } from "../../../../types/Params/SortParm/SortParam";

export interface ListOrdersProductsSoldRequestDTO {
    productsSold: Partial<OrderProductSold>
    sort?: SortParam<OrderProductSold>
    paging: PagingParam
    
}