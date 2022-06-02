export interface CreateCustomerRequestDTO {
    customer: {
        name: string
        cpf: string
        cnpj?: string | null
        email?: string | null
        phone?: string | null
        cellphone?: string | null
    }
}