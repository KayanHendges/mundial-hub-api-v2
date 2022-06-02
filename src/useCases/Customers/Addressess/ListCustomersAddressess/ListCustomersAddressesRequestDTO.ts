import { CustomerAddress } from "@prisma/client";
import { PagingParam } from "../../../../types/Params/Paging/PagingParam";
import { SortParam } from "../../../../types/Params/SortParm/SortParam";

export interface ListCustomersAddressesRequestDTO {
    addresses: Partial<CustomerAddress>
    sort?: SortParam<CustomerAddress>,
    paging?: PagingParam
}