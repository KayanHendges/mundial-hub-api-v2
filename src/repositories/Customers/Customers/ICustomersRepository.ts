import { Customer } from "../../../entities/Customer/Customer"
import { PagingParam } from "../../../types/Params/Paging/PagingParam"
import { SortParam } from "../../../types/Params/SortParm/SortParam"

export interface ListCustomersParams {
    customers: Partial<Omit<Customer, 'addresses'>>,
    sort?: SortParam<Omit<Customer, 'addresses'>> | null
    paging: PagingParam
}

export type FindCustomerParam = 
    Pick<Customer, 'id' | 'name' | 'cpf' | 'cnpj' | 'email' >

export interface ListCustomersResponse {
    customers: Customer[],
    total: number,
    sort?: SortParam<Customer>,
    paging: PagingParam
}

export interface ICustomersRepository {
    list(params?: ListCustomersParams): Promise<ListCustomersResponse>
    find(params: Partial<FindCustomerParam>): Promise<Customer>
    save(customer: Omit<Customer, 'id' | 'addresses' | 'modified' | 'created'>): Promise<{id: number}>
    update(customer: Partial<Omit<Customer, 'id' | 'addresses' | 'modified' | 'created'>>, id: number): Promise<Omit<Customer, 'addresses'>>
    delete(id: number): Promise<void>
}