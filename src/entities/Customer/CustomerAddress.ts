export class CustomerAddress {
    
    id: number
    customerId: number
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
    modified: Date | null
    created: Date

    constructor(props: CustomerAddress){
        Object.assign(this, props)
    }
}