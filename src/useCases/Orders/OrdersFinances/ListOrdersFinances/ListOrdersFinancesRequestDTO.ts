import { OrderFinance } from "../../../../entities/Order/OrderFinance";
import { PagingParam } from "../../../../types/Params/Paging/PagingParam";
import { SortParam } from "../../../../types/Params/SortParm/SortParam";

export interface ListOrdersFinancesRequestDTO {
    finances: Partial<OrderFinance>
    sort?: SortParam<OrderFinance>
    paging?: PagingParam
}