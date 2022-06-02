import { Decimal } from "@prisma/client/runtime"

export class OrderProductSold {
    
    id: number | null
    orderId: number | null
    trayId: number | null
    trayKitId: number | null
    productId: number
    kitId: number | null
    reference: string
    quantity: number
    name: string
    cost: number | null
    price: number
    paidPrice: number
    modified: Date | null
    created: Date

    constructor(props: OrderProductSold){
        Object.assign(this, props)
    }
}