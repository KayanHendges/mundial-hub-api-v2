import { Decimal } from "@prisma/client/runtime"

export class OrderFinance {

    id: number | null
    orderId: number | null
    type: string
    value: number
    date: Date
    applied: boolean
    modified: Date | null
    created: Date

    constructor(props: OrderFinance){
        Object.assign(this, props)
    }
}