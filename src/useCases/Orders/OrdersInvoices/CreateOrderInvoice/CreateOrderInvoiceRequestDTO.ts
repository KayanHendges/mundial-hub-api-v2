export interface CreateOrderInvoiceRequestDTO {
    invoice: {
        orderId: number
        cnpj: string
        number: number
        key?: string
        link?: string
    }
}