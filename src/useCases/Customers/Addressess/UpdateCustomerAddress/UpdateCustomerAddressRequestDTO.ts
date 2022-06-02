import { CustomerAddress } from "../../../../entities/Customer/CustomerAddress";

export interface UpdateCustomerAddressRequestDTO {
    id: number,
    address: Partial<{
        type: string
        name: string
        recipient?: string | null
        address: string
        number: string | null
        complement?: string | null
        neighborhood?: string | null
        city: string
        state: string
        zipCode: string
        country: string
        active: boolean
    }>
}