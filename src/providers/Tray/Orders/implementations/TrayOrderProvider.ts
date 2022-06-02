import axios from "axios";
import toBoolean from "../../../../services/dataFormat/boolean/toBoolean";
import toDateOrNull from "../../../../services/dataFormat/date/toDateOrNull";
import toFloatOrNull from "../../../../services/dataFormat/number/toFloatOrNull";
import toFloatOrZero from "../../../../services/dataFormat/number/toFloatOrZero";
import toIntOrNull from "../../../../services/dataFormat/number/toIntOrNull";
import toIntOrZero from "../../../../services/dataFormat/number/toIntOrZero";
import toStringOrNull from "../../../../services/dataFormat/string/toStringOrNull";
import { IStore } from "../../Store/IStore";
import { IBasicOrder, ITrayOrder, ITrayOrderListInformation, ITrayOrderProvider, ListParams, ListResponse, OrderFromTray } from "../ITrayOrderProvider";

export class TrayOrderProvider implements ITrayOrderProvider {
    async getOrdersListInformation(store: IStore): Promise<ITrayOrderListInformation> {
        
        const query = `${store.apiAddress}/orders?sort=id_desc&access_token=${store.accessToken}`

        const listInformation = await axios.get(query)
        .then(response => {
            
            const orderIdList: number[] = [] 
            
            response.data.Orders?.map(Order => {
                const id = toIntOrNull(Order.Order.id)
                if(id){
                    orderIdList.push(id)
                }
            })
            const totalOrders = toIntOrNull(response.data.paging.total)

            const lastOrderId = totalOrders > 0? toIntOrNull(response.data.Orders[0].Order.id) : 0
            
            if(lastOrderId && totalOrders){
                return { orderIdList, lastOrderId, totalOrders }
            }
        })
        .catch(err => {
            console.log(err)
            throw new Error('error getting order list information from Tray')
        })

        if(!listInformation){
            throw new Error('no order list information from Tray')
        } 
        
        return listInformation
    }

    async list({ store, limit, page }: ListParams): Promise<ListResponse> {
        
        const query = `${store.apiAddress}/orders?sort=id_desc&page=${page}&limit=${limit}&access_token=${store.accessToken}`

        const response = await axios.get(query)
        .then(response => {
            
            const orders: IBasicOrder[] = [] 
            const trayOrders: {Order: IBasicOrder}[] = response.data.Orders
            
            trayOrders?.map(Order => {

                const order = Order.Order

                if(order){
                    orders.push(order)
                }

            })
            
            const page = toIntOrNull(response.data.paging.page)
            const limit = toIntOrNull(response.data.paging.limit)
            const totalOrders = toIntOrNull(response.data.paging.total)
            var totalPages = null
            if(limit && totalOrders){
                totalPages = Math.ceil(totalOrders / limit)
            }

            if(orders && page && limit && totalOrders && totalPages){
                return {
                    orders,
                    page,
                    limit,
                    totalOrders,
                    totalPages
                }
            }

            throw new Error('error getting order list from Tray')
            
        })
        .catch(err => {
            console.log(err)
            throw new Error('error getting order list from Tray')
        })

        if(!response){
            throw new Error('error getting order list from Tray')
        }

        return response
    }

    async findOrderById(store: IStore, orderId: number): Promise<OrderFromTray> {
    
        const query = `${store.apiAddress}/orders/${orderId}/complete?access_token=${store.accessToken}`

        const trayOrder: ITrayOrder = await axios.get(query)
        .then(response => {
            return response.data.Order
        })
        .catch(err => {
            throw new Error('Error getting order by order_id from Tray Api')
        })

        const randomUser = axios.get('https://random-data-api.com/api/users/random_user')
        .then(response => { response.data })
        .catch( err => { throw new Error(err) } )

        const customerAddresses = trayOrder.Customer.CustomerAddresses.map(customerAddress => {
            const address = customerAddress.CustomerAddress

            const addressType = () => {
                if(address.type == '0'){
                    return 'cobrança'
                }

                if(address.type == '1'){
                    return 'entrega'
                }

                return null
            }

            return {
                type: addressType(),
                name: toStringOrNull(address.description),
                recipient: toStringOrNull(address.recipient),
                address: toStringOrNull(address.address),
                number: toStringOrNull(address.number),
                complement: toStringOrNull(address.complement),
                neighborhood: toStringOrNull(address.neighborhood),
                city: toStringOrNull(address.city),
                state: toStringOrNull(address.state),
                zipCode: toStringOrNull(address.zip_code),
                country: toStringOrNull(address.country),
                active: toBoolean(address.active),
            }
        })

        const payments = trayOrder.Payment.map(payment => {
            const paid = toFloatOrZero(payment.Payment.value)
            const totalOrder = toFloatOrZero(trayOrder.total)

            const value = paid == totalOrder? totalOrder : paid
            
            return {
                value: value,
                date: toDateOrNull(payment.Payment.date),
                method: toStringOrNull(payment.Payment.method),
                modified: toDateOrNull(payment.Payment.modified),
                created: toDateOrNull(payment.Payment.created)
            }
        })

        const couponInfo = trayOrder.coupon != undefined? trayOrder.coupon : {
            code: null,
            discount: null,
            type: null,
        }

        const invoices = trayOrder.OrderInvoice.map(orderInvoice => {
            const invoice = orderInvoice.OrderInvoice
            
            return {
                cnpj: null,
                key: toStringOrNull(invoice.key),
                link: toStringOrNull(invoice.link),
                number: toIntOrNull(invoice.number),
            }
        })

        const chosenShipping = () => {
            const splitted = trayOrder.shipment.split(' - ')

            if(splitted.length == 0){

                const type = splitted[0].length > 0? splitted[0] : ''
                
                return { type: '', id: 0 }
            }
            
            if(splitted.length == 1){

                const type = splitted[0].length > 0? splitted[0] : ''
                
                return { type, id: 0 }
            }
            
            const type = splitted[0].length > 0? splitted[0] : ''
            const id = splitted[1].length > 0? toIntOrNull(splitted[1]) : 0

            if(type && id){
                return { type, id }
            }

            return { type: '', id: 0 }
        }

        const productsSold = await Promise.all(trayOrder.ProductsSold.map(async(productSold) => {
            const product = productSold.ProductsSold
            
            const productId = await getHubIdProduct(toIntOrNull(product.product_id), store.trayId)
            const kitId = await getHubIdProduct(toIntOrNull(product.product_kit_id), store.trayId)

            const name = toStringOrNull(product.name)
            const originalName = toStringOrNull(product.original_name)

            const productName = originalName? originalName : name
            
            return {
                trayId: toIntOrNull(product.product_id),
                trayKitId: toIntOrNull(product.product_kit_id),
                productId: productId,
                kitId: kitId,
                reference: toStringOrNull(product.reference),
                quantity: toIntOrZero(product.quantity),
                name: productName,
                cost: toFloatOrNull(product.cost_price),
                price: toFloatOrNull(product.original_price),
                paidPrice: toFloatOrNull(product.price),
            }
        }))

        const notes = []

        const trayNote: string[] = []

        trayOrder?.store_note?.split(' ').map((word, index) => {

            if(index < 2 || word == '<br/>'){
                return
            }

            trayNote.push(word)
        })

        notes.push({
            description: trayNote.join(' '),
            by: 'tray',
            modified: null,
            created: null,
        })

        const marketplaceOrders = trayOrder.MarketplaceOrder.map((martketPlaceOrder) => {
            const order = martketPlaceOrder.MarketplaceOrder

            const marketPlaceOrderId = toStringOrNull(order.marketplace_order_id)

            const link = () => {
                if(order?.marketplace_name == 'Mercado Livre'){
                    return `https://www.mercadolivre.com.br/vendas/${marketPlaceOrderId}/detalhe`
                }
                
                if(order?.marketplace_name == 'Via Varejo'){
                    return `https://pas.viavarejo.com.br/vendas/pedidos/detalhes/${marketPlaceOrderId}`
                }

                return null
            }

            return {
                name: toStringOrNull(order.marketplace_name),
                marketPlaceOrderId,
                link: link(),
                created: toDateOrNull(order.created)
            }
        })

        const deliveryTime = () => {

            if(trayOrder.delivery_time.length == 0){
                return {min: null, max: null}
            }

            const deliveryArray = trayOrder.delivery_time.split(" a ")

            if(deliveryArray.length == 1){
                const minAndMax = toIntOrNull(deliveryArray[0])

                return {min: minAndMax, max: minAndMax}
            }

            if(deliveryArray.length == 2){
                const min = toIntOrNull(deliveryArray[0])
                const max = toIntOrNull(deliveryArray[1])

                return {min, max}
            }

            return {min: null, max: null}
        }

        return {
            trayOrderId: toIntOrNull(trayOrder.id),
            storeCode: store.trayId,
            status: trayOrder.status,
            subtotal: toFloatOrNull(trayOrder.partial_total),
            taxes: toFloatOrNull(trayOrder.taxes),
            discount: toFloatOrNull(trayOrder.discount),
            paymentMethod: toStringOrNull(trayOrder.payment_method),
            paymentMethodDiscount: toFloatOrNull(trayOrder.payment_method_rate.replace('-', '')),
            coupon: couponInfo.code,
            discountCoupon: toFloatOrNull(trayOrder?.coupon?.discount),
            total: toFloatOrNull(trayOrder.total),
            localSale: toStringOrNull(trayOrder.point_sale),
            chosenTransporterId: chosenShipping().id, // corrigir depois
            chosenShippingType: chosenShipping().type, // corrigir depois
            chosenShippingValue: toFloatOrNull(trayOrder.shipment_value),
            deliveryTimeMin: deliveryTime().min,
            deliveryTimeMax: deliveryTime().max,
            transporterId: null,
            shippingCost: null,
            dispatchedDate: toDateOrNull(trayOrder.shipment_date),
            deliveredDate: null,
            partnerId: toIntOrNull(trayOrder.partner_id),
            customer: {
                name: toStringOrNull(trayOrder.Customer.name),
                cpf: toStringOrNull(trayOrder.Customer.cpf),
                cnpj: toStringOrNull(trayOrder.Customer.cnpj),
                email: toStringOrNull(trayOrder.Customer.email),
                phone: toStringOrNull(trayOrder.Customer.phone),
                cellphone: toStringOrNull(trayOrder.Customer.cellphone),
                addresses: customerAddresses,
                modified: toDateOrNull(trayOrder.Customer.modified),
                created: toDateOrNull(trayOrder.Customer.created),
            },
            paid: toBoolean(trayOrder.has_payment),
            payments: payments,
            invoices: invoices,
            finances: [],
            productsSold: productsSold,
            notes: notes,
            marketPlaceOrder: marketplaceOrders.length > 0? marketplaceOrders[0] : null,
            modified: toDateOrNull(trayOrder.modified),
            created: toDateOrNull(`${trayOrder.date} ${trayOrder.hour}`),
        }

        async function getHubIdProduct(trayId: number, storeId: number): Promise<number | null>{
            
            const query = `https://api.mundialhub.com.br/products/unitary-by-tray-id?tray_id=${trayId}&store_id=${storeId}`

            const hubId = await axios.get(query)
            .then(response => {
                if(response?.data?.hub_id != undefined){
                    return response.data.hub_id
                } else {
                    return null
                }
            })
            .catch(err => { return null })

            return hubId
        }
    }
}