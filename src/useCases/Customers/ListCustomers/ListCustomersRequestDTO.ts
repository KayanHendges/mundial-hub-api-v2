import { Customer } from "../../../entities/Customer/Customer";
import { PagingParam } from "../../../types/Params/Paging/PagingParam";
import { SortParam } from "../../../types/Params/SortParm/SortParam";

export interface ListCustomersRequestDTO {
    customers: Partial<Omit<Customer, 'addresses'>>
    sort?: SortParam<Omit<Customer, 'addresses'>>,
    paging: PagingParam
}