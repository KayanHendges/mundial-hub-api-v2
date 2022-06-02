import { PagingParam } from "../../../types/Params/Paging/PagingParam"
import { SortParam } from "../../../types/Params/SortParm/SortParam"

type TransporterParams = {
    id?: number,
    externalId?: number,
    name?: string
    ssw?: boolean
    trackingLink?: string
    modified?: Date | null
    created?: Date
}

export interface ListTransportersRequestDTO  {
    fields?: TransporterParams
    sort?: SortParam<TransporterParams>
    paging?: PagingParam
}