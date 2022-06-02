import { Decimal } from "@prisma/client/runtime"
import { Customer } from "../Customer/Customer"
import { Transporter } from "../Transporter/Transporter"
import { OrderFinance } from "./OrderFinance"
import { OrderInvoice } from "./OrderInvoice"
import { OrderMarketPlaceOrder } from "./OrderMarketPlaceOrder"
import { OrderNote } from "./OrderNote"
import { OrderPayment } from "./OrderPayment"
import { OrderProductSold } from "./OrderProductSold"

export class OrderComplete {
    
    id: number | null
    trayOrderId: number
    storeCode: number
    status: string
    subtotal: number | Decimal
    taxes: number | Decimal | null
    discount: number | Decimal | null
    paymentMethodDiscount: number | Decimal | null
    discountCoupon: number | Decimal | null
    coupon: string | null
    total: number | Decimal
    localSale: string | null
    chosenTransporterId: number | null
    chosenShippingType: string | null
    chosenShippingValue: number | Decimal
    deliveryTimeMin: number | null
    deliveryTimeMax: number | null
    transporter?: Transporter | null
    shippingCost: number | Decimal | null
    dispatchedDate: Date | null
    deliveredDate: Date | null
    partnerId: number | null
    customer?: Customer | null
    shippingAddressId: number | null
    billingAddressId: number | null
    paid: boolean
    payments: OrderPayment[]
    invoices: OrderInvoice[]
    finances: OrderFinance[]
    productsSold: OrderProductSold[]
    notes: OrderNote[]
    marketPlaceOrder?: OrderMarketPlaceOrder | null
    modified: Date | null
    created: Date

    constructor(props: OrderComplete){
        Object.assign(this, props)
    }
}