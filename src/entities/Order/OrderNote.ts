export class OrderNote {
    
    id: number | null
    orderId: number | null
    description: string
    by: string
    modified: Date | null
    created: Date

    constructor(props: OrderNote){
        Object.assign(this, props)
    }
}