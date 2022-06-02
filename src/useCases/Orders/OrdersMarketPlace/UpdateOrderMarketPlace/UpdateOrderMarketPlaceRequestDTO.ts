import { OrderMarketPlaceOrder } from "../../../../entities/Order/OrderMarketPlaceOrder";

export interface UpdateOrderMarketPlaceRequestDTO {
    id: number,
    orderMarketPlace: Partial<Pick<OrderMarketPlaceOrder, 'name' | 'marketPlaceOrderId' | 'link' >>
}