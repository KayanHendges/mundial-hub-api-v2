import { Transporter } from "../../entities/Transporter/Transporter";
import { PagingParam } from "../../types/Params/Paging/PagingParam";
import { SortParam } from "../../types/Params/SortParm/SortParam";

export interface TransporterParams {
    id?: number,
    externalId?: number,
    name?: string
    ssw?: boolean
    trackingLink?: string
    modified?: Date | null
    created?: Date
}

export interface ListTransportersParams {
    fields?: TransporterParams
    sort?: SortParam<TransporterParams>
    paging?: PagingParam
}

export interface ListTransportersResponse {
    transporters: Transporter[],
    total: number
    sort?: SortParam<Transporter> | null
    paging: PagingParam
}

export interface ITransporterRepository {
    list(params?: ListTransportersParams): Promise<ListTransportersResponse>
    find(params: Pick<TransporterParams, 'id' | 'externalId'>): Promise<Transporter>
    save(transporter: Omit<Transporter, 'id' | 'modified' | 'created'>): Promise<{id: number}>
    update(transporter: Partial<Omit<Transporter, 'id' | 'modified' | 'created'>>, id: number): Promise<void>
    delete(id: number): Promise<void>
}