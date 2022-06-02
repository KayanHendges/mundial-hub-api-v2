import { OrderInvoice } from "../../../../entities/Order/OrderInvoice";

export interface UpdateOrderInvoiceRequestDTO {
    id: number,
    invoice: Partial<Omit<OrderInvoice, 'id' | 'orderId' | 'modified' | 'created'>>
}