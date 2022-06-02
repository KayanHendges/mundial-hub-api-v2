export interface CreateCustomerAddressRequestDTO {
    address: {
        customerId: number
        type: string
        name: string
        recipient?: string | null
        address: string
        number: string | null
        complement?: string | null
        neighborhood?: string | null
        city: string | null
        state: string | null
        zipCode: string | null
        country: string
        active: boolean
    }
}