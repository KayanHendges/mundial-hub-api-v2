import { Customer } from "../../../entities/Customer/Customer";
import { CustomerAddress } from "../../../entities/Customer/CustomerAddress";
import { Order } from "../../../entities/Order/Order";
import { OrderFinance } from "../../../entities/Order/OrderFinance";
import { OrderInvoice } from "../../../entities/Order/OrderInvoice";
import { OrderMarketPlaceOrder } from "../../../entities/Order/OrderMarketPlaceOrder";
import { OrderNote } from "../../../entities/Order/OrderNote";
import { OrderPayment } from "../../../entities/Order/OrderPayment";
import { OrderProductSold } from "../../../entities/Order/OrderProductSold";
import { ICustomerAddress, ICustomerData } from "../Customers/ICustomers";
import { IStore } from "../Store/IStore";

export interface IParams {
    id?: number,
    status?: string,
    partner_id?: string,
    session_id?: string,
    sending_code?: string,
    customer_id?: number,
    shipment?: string,
    point_sale?: string,
    payment_method?: string,
    access_code?: string,
    external_code?: string,
    has_payment?: '0' | '1',
    has_invoice?: '0' | '1',
    has_shipment?: '0' | '1',
    printed?: '1' | "",
    payment_method_id?: number,
    store_note?: string,
    discount_coupon?: number,
    modified?: string,
    date?: string,
    shipment_date?: string,
    payment_date?: string,
}

export interface IBasicOrder {
    status: string,
    id: string,
    date: string,
    hour: string,
    customer_id: string,
    partial_total: string,
    taxes: string,
    discount: string,
    point_sale: string,
    shipment: string,
    shipment_value: string,
    shipment_date: string,
    delivery_time: string,
    store_note: string,
    discount_coupon: string,
    payment_method_rate: string,
    value_1: string,
    payment_method: string,
    sending_code: string,
    session_id: string,
    total: string,
    payment_date: string,
    access_code: string,
    progressive_discount: string,
    shipping_progressive_discount: string,
    shipment_integrator: string,
    modified: string,
    printed: string,
    interest: string,
    id_quotation: string,
    has_payment: string,
    has_shipment: string,
    has_invoice: string,
}

interface ICustomerOrder extends ICustomerData {
    CustomerAddresses: {CustomerAddress: ICustomerAddress}[]
}

interface IProductSold {
    product_kit_id: string,
    product_kit_id_kit: string,
    product_id: string,
    quantity: string,
    id: string,
    order_id: string,
    name: string,
    original_name: string,
    virtual_product: string,
    ean: string,
    availability_days: string,
    price: string,
    cost_price: string,
    original_price: string,
    weight: string,
    weight_cubic: string,
    brand: string,
    model: string,
    reference: string,
    length: string,
    width: string,
    height: string,
    variant_id: string,
    additional_information: string,
    text_variant: string,
    warranty: string,
    ncm: string,
    included_items: string,
    release_date: string,
}

export interface IPayment {
    created: string,
    modified: string,
    id: string,
    order_id: string,
    payment_method_id: string,
    method: string,
    payment_place: string,
    value: string,
    date: string,
    note: string,
}

export interface IInvoice {
    id: string,
    order_id: string,
    issue_date: string,
    number: string,
    serie: string,
    value: string,
    key: string,
    link: string,
    xml_danfe: string,
}

export interface IMarketPlaceOrder {
    id: string,
    order_id: string,
    marketplace_name: string,
    marketplace_seller_name: string,
    marketplace_seller_id: string,
    marketplace_document: string,
    payment_responsible_document: string,
    marketplace_order_id: string,
    marketplace_shipping_id: string,
    marketplace_shipping_type: string,
    marketplace_internal_status: string,
    created: string,
    updated: string,
}

export interface ITrayOrder extends IBasicOrder {
    cost: string,
    partner_id: string,
    OrderStatus: {
        id: string,
        status: string,
        type: "open" | "closed" | "canceled"
    },
    coupon: undefined | {
        code: string,
        discount: string,
        type: string,
    }
    Customer: ICustomerOrder,
    ProductsSold: {ProductsSold: IProductSold}[],
    Payment: {Payment: IPayment}[],
    OrderInvoice: {OrderInvoice: IInvoice}[],
    MarketplaceOrder: {MarketplaceOrder: IMarketPlaceOrder}[]
}

export interface ITrayOrderListInformation {
    orderIdList: number[],
    lastOrderId: number,
    totalOrders: number,
}

type CustomerAddressFromTray = Omit<CustomerAddress, 'id' | 'customerId' | 'modified' | 'created'>

export type CustomerFromTray = {
    name: string
    cpf: string
    cnpj: string | null
    created: Date
    email: string
    phone: string | null
    cellphone: string | null
    addresses: CustomerAddressFromTray[]
    modified: Date
}

export interface OrderFromTray {
    trayOrderId: number
    storeCode: number
    status: string
    subtotal: number
    taxes: number | null
    discount: number | null
    paymentMethod: string
    paymentMethodDiscount: number | null
    discountCoupon: number | null
    coupon: string | null
    total: number
    localSale: string | null
    chosenTransporterId: number | null
    chosenShippingType: string | null
    chosenShippingValue: number
    deliveryTimeMin: number | null
    deliveryTimeMax: number | null
    transporterId: number | null
    shippingCost: number | null
    dispatchedDate: Date | null
    deliveredDate: Date | null
    partnerId: number | null
    customer: CustomerFromTray
    paid: boolean
    payments: Omit<OrderPayment, 'id' | 'orderId'>[]
    invoices: Omit<OrderInvoice, 'id' | 'orderId' | 'modified' | 'created'>[]
    finances: Omit<OrderFinance, 'id' | 'orderId'>[]
    productsSold: Omit<OrderProductSold, 'id' | 'orderId' | 'modified' | 'created'>[]
    notes: Omit<OrderNote, 'id' | 'orderId'>[]
    marketPlaceOrder: Omit<OrderMarketPlaceOrder, 'id' | 'orderId' | 'modified'>| null
    modified: Date | null
    created: Date
}

export interface ListParams {
    store: IStore,
    page: number,
    limit: number,
}

export interface ListResponse {
    orders: IBasicOrder[],
    totalOrders: number,
    page: number,
    limit: number,
    totalPages: number
}

export interface ITrayOrderProvider {
    getOrdersListInformation(store: IStore): Promise<ITrayOrderListInformation>
    list(params: ListParams): Promise<ListResponse>
    findOrderById(store: IStore, orderId: number): Promise<OrderFromTray>
}