export interface UpdateOrderNoteRequestDTO {
    id: number,
    note: {
        description?: string,
        by?: string
    }
}