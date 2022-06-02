import { Decimal } from "@prisma/client/runtime"

export class OrderPayment {
    
    id: number | null
    orderId: number
    method: string
    value: number
    date: Date
    modified: Date | null
    created: Date

    constructor(props: OrderPayment){
        Object.assign(this, props)
    }
}