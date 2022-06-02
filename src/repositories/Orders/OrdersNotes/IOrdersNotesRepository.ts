import { OrderNote } from "../../../entities/Order/OrderNote"
import { PagingParam } from "../../../types/Params/Paging/PagingParam"
import { SortParam } from "../../../types/Params/SortParm/SortParam"

export interface ListOrdersNotesParams {
    ordersNotes?: Partial<OrderNote>,
    sort?: SortParam<OrderNote> | null
    paging?: PagingParam
}

export interface ListOrdersNotesResponse {
    ordersNotes: OrderNote[],
    total: number,
    sort?: SortParam<OrderNote>,
    paging: PagingParam
}

export type FindOrderNoteParam = 
    Pick<OrderNote, 'id' >

export type DeleteOrderNoteParam = FindOrderNoteParam

export interface IOrdersNotesRepository {
    list(params?: ListOrdersNotesParams): Promise<ListOrdersNotesResponse>
    find(params: FindOrderNoteParam): Promise<OrderNote>
    save(orderNote: Omit<OrderNote, 'id' | 'modified' | 'created'>): Promise<{id: number}>
    saveMany(ordersNotes: Omit<OrderNote, 'id' | 'modified' | 'created'>[]): Promise<{ordersNotesCreated: number}>
    update(orderNote: Partial<Omit<OrderNote, 'id' | 'orderId' | 'modified' | 'created'>>, id: number): Promise<OrderNote>
    delete(id: DeleteOrderNoteParam): Promise<number>
}