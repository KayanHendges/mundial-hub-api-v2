export interface UpdateCustomerRequestDTO {
    id: number,
    customer: {
        name?: string
        cpf?: string
        cnpj?: string | null
        email?: string
        phone?: string | null
        cellphone?: string | null
    }
}