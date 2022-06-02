import { CustomerAddress } from "../../../entities/Customer/CustomerAddress"
import { PagingParam } from "../../../types/Params/Paging/PagingParam"
import { SortParam } from "../../../types/Params/SortParm/SortParam"

export interface ListCustomersAddressesParams {
    customersAddresses: Partial<CustomerAddress>,
    sort?: SortParam<CustomerAddress> | null
    paging?: PagingParam
}

export interface ListCustomersAddressesResponse {
    customersAddresses: CustomerAddress[],
    total: number,
    sort?: SortParam<CustomerAddress>,
    paging: PagingParam
}

export type FindCustomerAddressParam = 
    Pick<CustomerAddress, 'id' >

export interface ICustomersAddressesRepository {
    list(params?: ListCustomersAddressesParams): Promise<ListCustomersAddressesResponse>
    find(params: FindCustomerAddressParam): Promise<CustomerAddress>
    save(customerAddress: Omit<CustomerAddress, 'id' | 'modified' | 'created'>): Promise<{id: number}>
    saveMany(customersAddresses: Omit<CustomerAddress, 'id' | 'modified' | 'created'>[]): Promise<{customersAddressesCreated: number}>
    update(customerAddress: Partial<Omit<CustomerAddress, 'id' | 'modified' | 'created'>>, id: number): Promise<CustomerAddress>
    delete(id: number): Promise<number>
}