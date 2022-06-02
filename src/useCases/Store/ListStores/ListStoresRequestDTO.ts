import { Store } from "../../../entities/Store/Store";
import { PagingParam } from "../../../types/Params/Paging/PagingParam";
import { SortParam } from "../../../types/Params/SortParm/SortParam";

export interface ListStoresRequestDTO {
    stores: Partial<Store>,
    sort?: SortParam<Store>,
    paging?: PagingParam
}