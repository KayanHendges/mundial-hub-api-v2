export interface CreateOrderNoteRequestDTO {
    note: {
        orderId: number,
        description: string,
        by: string,
    }
}