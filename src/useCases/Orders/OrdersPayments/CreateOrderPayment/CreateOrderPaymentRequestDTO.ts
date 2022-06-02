import { Decimal } from "@prisma/client/runtime"

export interface CreateOrderPaymentRequestDTO {
    payment: {
        orderId: number
        method: string
        value: number
        date: Date
    }
}