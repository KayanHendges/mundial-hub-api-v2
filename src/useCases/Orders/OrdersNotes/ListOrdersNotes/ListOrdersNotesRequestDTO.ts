import { OrderNote } from '../../../../entities/Order/OrderNote'
import { PagingParam } from '../../../../types/Params/Paging/PagingParam'
import { SortParam } from '../../../../types/Params/SortParm/SortParam'

export interface ListOrdersNotesRequestDTO {
    notes: Partial<OrderNote>
    sort?: SortParam<OrderNote>,
    paging: PagingParam
}