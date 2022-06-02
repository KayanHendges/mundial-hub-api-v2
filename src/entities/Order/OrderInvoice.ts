export class OrderInvoice {

    id: number | null
    orderId: number
    cnpj: string | null
    number: number
    key?: string | null
    link?: string | string
    modified: Date | null
    created: Date

    constructor(props: OrderInvoice){
        Object.assign(this, props)
    }
}