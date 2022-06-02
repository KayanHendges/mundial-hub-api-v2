import { Decimal } from "@prisma/client/runtime"

export interface UpdateOrderPaymentRequestDTO {
    id: number,
    payment: {
        method?: string
        value?: number
        date?: Date
    }
}