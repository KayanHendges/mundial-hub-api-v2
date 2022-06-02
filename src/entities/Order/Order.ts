import { Decimal } from "@prisma/client/runtime"

export class Order {
    
    id: number | null
    trayOrderId: number
    storeCode: number
    status: string
    subtotal: number
    taxes: number | null
    discount: number | null
    paymentMethod?: string | null
    paymentMethodDiscount: number | null
    discountCoupon: number | null
    coupon: string | null
    total: number
    localSale: string | null
    chosenTransporterId: number | null
    chosenShippingType: string | null
    chosenShippingValue: number
    deliveryTimeMin: number | null
    deliveryTimeMax: number | null
    transporterId: number | null
    shippingCost: number | null
    dispatchedDate: Date | null
    deliveredDate: Date | null
    partnerId?: number | null
    customerId: number | null
    shippingAddressId: number | null
    billingAddressId: number | null
    paid: boolean
    modified: Date | null
    created: Date

    constructor(props: Order){
        Object.assign(this, props)
    }
}