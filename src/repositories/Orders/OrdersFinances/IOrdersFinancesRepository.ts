import { OrderFinance } from "../../../entities/Order/OrderFinance"
import { PagingParam } from "../../../types/Params/Paging/PagingParam"
import { SortParam } from "../../../types/Params/SortParm/SortParam"

export interface ListOrdersFinancesParams {
    ordersFinances?: Partial<OrderFinance>,
    sort?: SortParam<OrderFinance> | null
    paging?: PagingParam
}

export interface ListOrdersFinancesResponse {
    ordersFinances: OrderFinance[],
    total: number,
    sort?: SortParam<OrderFinance>,
    paging: PagingParam
}

export type FindOrderFinanceParam = 
    Pick<OrderFinance, 'id' >

export type DeleteOrderFinanceParam = FindOrderFinanceParam

export interface IOrdersFinancesRepository {
    list(params?: ListOrdersFinancesParams): Promise<ListOrdersFinancesResponse>
    find(params: FindOrderFinanceParam): Promise<OrderFinance>
    save(orderFinance: Omit<OrderFinance, 'id' | 'modified' | 'created'>): Promise<{id: number}>
    saveMany(ordersFinances: Omit<OrderFinance, 'id' | 'modified' | 'created'>[]): Promise<{ordersFinancesCreated: number}>
    update(orderFinance: Partial<Omit<OrderFinance, 'id' | 'orderId' | 'modified' | 'created'>>, id: number): Promise<OrderFinance>
    delete(id: DeleteOrderFinanceParam): Promise<number>
}