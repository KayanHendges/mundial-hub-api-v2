import { OrderFinance } from "../../../../entities/Order/OrderFinance";

export interface UpdateOrderFinanceRequestDTO {
    id: number,
    finance: Partial<Omit<OrderFinance, 'id' | 'orderId' | 'modified' | 'created'>>
}