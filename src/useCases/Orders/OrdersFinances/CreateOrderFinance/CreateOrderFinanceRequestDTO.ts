import { Decimal } from "@prisma/client/runtime"

export interface CreateOrderFinanceRequestDTO {
    finance: {
        orderId: number
        type: string
        value: number
        date: Date
        applied: boolean
    }
}