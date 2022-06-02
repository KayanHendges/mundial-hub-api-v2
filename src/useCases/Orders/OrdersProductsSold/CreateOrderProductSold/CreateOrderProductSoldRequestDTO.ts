export interface CreateOrderProductSoldRequestDTO {
    productSold: {
        orderId: number
        trayId: number | null
        trayKitId: number | null
        productId: number | null
        kitId: number | null
        reference: string
        quantity: number
        name: string
        cost: number | null
        price: number
        paidPrice: number
    }
}