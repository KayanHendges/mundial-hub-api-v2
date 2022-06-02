export class OrderMarketPlaceOrder {

    id: number | null
    orderId: number | null
    name: string
    marketPlaceOrderId: string
    link?: string | null
    modified: Date | null
    created: Date

    constructor(props: OrderMarketPlaceOrder){
        Object.assign(this, props)
    }
}