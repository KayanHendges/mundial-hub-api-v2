export interface CreateOrderMarketPlaceRequestDTO {
    orderMarketPlace: {
        orderId: number
        name: string
        marketPlaceOrderId: string
        link?: string | null
    }
}