import { CustomerAddress } from "./CustomerAddress"

export class Customer {
    
    id: number
    name: string
    cpf: string
    cnpj?: string | null
    email?: string | null
    phone?: string | null
    cellphone?: string | null
    addresses: CustomerAddress[]
    modified: Date
    created: Date

    constructor(props: Customer){
        Object.assign(this, props)
    }
}