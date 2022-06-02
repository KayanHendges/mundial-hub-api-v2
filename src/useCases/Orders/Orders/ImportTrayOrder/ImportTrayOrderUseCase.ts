import { ITrayOrderProvider } from "../../../../providers/Tray/Orders/ITrayOrderProvider";
import { IOrdersRepository } from "../../../../repositories/Orders/Orders/IOrdersRepository";
import { IOrdersFinancesRepository } from "../../../../repositories/Orders/OrdersFinances/IOrdersFinancesRepository";
import { IOrdersInvoicesRepository } from "../../../../repositories/Orders/OrdersInvoices/IOrdersInvoicesRepository";
import { IOrdersMarketPlacesRepository } from "../../../../repositories/Orders/OrdersMarketPlaces/IOrdersMarketPlacesRepository";
import { IOrdersNotesRepository } from "../../../../repositories/Orders/OrdersNotes/IOrdersNotesRepository";
import { IOrdersPaymentsRepository } from "../../../../repositories/Orders/OrdersPayments/IOrdersPaymentsRepository";
import { IOrdersProductsSoldRepository } from "../../../../repositories/Orders/OrdersProductsSold/IOrdersProductsSoldRepository";
import { IStoreRepository } from "../../../../repositories/Store/IStoreRepository";
import { ITransporterRepository } from "../../../../repositories/Transporters/ITransporterRepository";
import { CreateCustomerFromTrayUseCase } from "../../../Customers/CreateCustomerFromTray/CreateCustomerFromTrayUseCase";
import { ImportTrayOrderDataValidate } from "./ImportTrayOrderDataValidate";
import { ImportTrayOrderRequestDTO } from "./ImportTrayOrderRequestDTO";

export class ImportTrayOrderUseCase {
    constructor(
        private importTrayOrderDataValidate: ImportTrayOrderDataValidate,
        private storesRepository: IStoreRepository,
        private trayOrdersProvider: ITrayOrderProvider,
        private createCustomerFromTrayUseCase: CreateCustomerFromTrayUseCase,
        private transportersRepository: ITransporterRepository,
        private ordersRepository: IOrdersRepository,
        private ordersPaymentsRepository: IOrdersPaymentsRepository,
        private ordersInvoiceRepository: IOrdersInvoicesRepository,
        private ordersFinancesRepository: IOrdersFinancesRepository,
        private ordersProductsSoldRepository: IOrdersProductsSoldRepository,
        private ordersNotesRepository: IOrdersNotesRepository,
        private ordersMarketPlacesRepository: IOrdersMarketPlacesRepository
    ){}

    async execute(data: ImportTrayOrderRequestDTO): Promise<{ createdId: number }>{

        try {
            await this.importTrayOrderDataValidate.execute(data)
        } catch (err) {
            throw new Error(err)
        }

        const { id, storeCode } = data
        
        const store = await this.storesRepository.findByStoreCode(storeCode)
        .catch( err => { 
            console.log(err)
            throw new Error(err)
        })
        
        console.log(`importando pedido ${id} da loja ${store.name}`)

        const order = await this.trayOrdersProvider.findOrderById(store, id)
        
        const { customer } = order
        
        const createCustomer = this.createCustomerFromTrayUseCase.execute({ customer })

        const getChosenTransporterId = getTransporterId(order.chosenTransporterId, this.transportersRepository )

        const { "0": createdCustomer, "1": transporterId } = await Promise.all([ createCustomer, getChosenTransporterId ])
        .catch( err => { 
            console.log(err)
            throw new Error(err)
        })

        const { customerId, billingAddressId, shippingAddressId } = createdCustomer

        // const { orders } = await this.ordersRepository.list({ orders: {
        //     trayOrderId: order.trayOrderId,
        //     storeCode
        // }})

        // if(orders.length > 0){
        //     throw new Error(`the trayOrderId ${order.trayOrderId} already existis on ${store.name}`)
        // }

        const { id: createdId } = await this.ordersRepository.save({
            trayOrderId: order.trayOrderId,
            storeCode: order.storeCode,
            status: order.status,
            subtotal: order.subtotal,
            taxes: order.taxes,
            discount: order.discount,
            paymentMethod: order?.paymentMethod,
            paymentMethodDiscount: order.paymentMethodDiscount,
            discountCoupon: order.discountCoupon,
            coupon: order.coupon,
            total: order.total,
            localSale: order.localSale,
            chosenTransporterId: transporterId,
            chosenShippingType: order.chosenShippingType,
            chosenShippingValue: order.chosenShippingValue,
            deliveryTimeMin: order.deliveryTimeMin,
            deliveryTimeMax: order.deliveryTimeMax,
            transporterId: null,
            shippingCost: order.shippingCost,
            dispatchedDate: order.dispatchedDate,
            deliveredDate: order.deliveredDate,
            partnerId: order.partnerId,
            customerId,
            shippingAddressId,
            billingAddressId,
            paid: order.paid,
            modified: order.modified,
            created: order.created,
        })
        .catch( err => { throw new Error(err) } )

        if(!createdId){
            throw new Error('error creating new Order')
        }

        const payments = Promise.all(order.payments?.map( async(payment) => {
            await this.ordersPaymentsRepository.save({
                orderId: createdId,
                value: payment?.value,
                method: payment?.method,
                date: payment?.date,
            })
            return
        }))
        .catch( err => { throw new Error(err) } )

        const invoices = Promise.all(order.invoices?.map( async(invoice) => {
            await this.ordersInvoiceRepository.save({
                orderId: createdId,
                cnpj: invoice?.cnpj,
                number: invoice?.number,
                key: invoice?.key,
                link: invoice?.link,
            })
            return
        }))
        .catch( err => { throw new Error(err) } )

        const finances = Promise.all(order.finances?.map( async(finance) => {
            await this.ordersFinancesRepository.save({
                orderId: createdId,
                applied: finance?.applied,
                type: finance?.type,
                value: finance?.value,
                date: finance?.date
            })
            return
        }))
        .catch( err => { throw new Error(err) } )

        const productsSold = Promise.all(order.productsSold?.map( async(product) => {
            await this.ordersProductsSoldRepository.save({
                orderId: createdId,
                reference: product?.reference,
                quantity: product?.quantity,
                name: product?.name,
                kitId: product?.kitId,
                trayKitId: product?.trayKitId,
                productId: product?.productId,
                trayId: product?.trayId,
                cost: product?.cost,
                paidPrice: product?.paidPrice,
                price: product?.price,
            })
            return
        }))
        .catch( err => { throw new Error(err) } )

        const notes = Promise.all(order.notes?.map( async(note) => {
            await this.ordersNotesRepository.save({
                orderId: createdId,
                by: note?.by,
                description: note?.description
            })
            return
        }))
        .catch( err => { throw new Error(err) } )

        const marketPlaceOrder = order.marketPlaceOrder
        const saveMarketPlaceOrder = marketPlaceOrder? await this.ordersMarketPlacesRepository.save({
            orderId: createdId,
            marketPlaceOrderId: marketPlaceOrder?.marketPlaceOrderId,
            name: marketPlaceOrder?.name,
            link: marketPlaceOrder?.link
        }) : null

        Promise.all([payments, invoices, finances, productsSold, notes, saveMarketPlaceOrder])
        .catch( err => { throw new Error(err) } )

        return { createdId }

        async function getTransporterId(externalId: number, transportersRepository: ITransporterRepository): Promise<number | null>{

            if(!externalId){
                return null
            }

            const transporter = await transportersRepository.find({ externalId })
            .catch( err => { throw new Error(err) } )
            
            const id = transporter?.id

            if(!id){
                return null
            }

            return id
        }

    }
} 