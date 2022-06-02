import { prismaClient } from "../../../../dataBase/prismaClient"
import { OrderPayment } from "../../../../entities/Order/OrderPayment"
import pagingToPrisma from "../../../../prismaClient/functions/paging"
import { FindOrderPaymentParam, IOrdersPaymentsRepository, ListOrdersPaymentsParams, ListOrdersPaymentsResponse } from "../IOrdersPaymentsRepository"

export class PrismaOrdersPaymentsRepository implements IOrdersPaymentsRepository {

    async list(params?: ListOrdersPaymentsParams): Promise<ListOrdersPaymentsResponse> {

        const ordersPayments = await prismaClient.orderPayment.findMany({
            where: params?.ordersPayments,
            orderBy: params?.sort,
            ...pagingToPrisma(params?.paging),
        })
        .catch(err => {
            console.log(err)
            throw new Error('error getting ordersPayments list from database')
        })

        if(ordersPayments){
            return {
                ordersPayments,
                total: ordersPayments.length,
                sort: params?.sort,
                paging: params?.paging
            }
        }

    }

    async find(params: FindOrderPaymentParam): Promise<OrderPayment> {
        
        const orderPayment = await prismaClient.orderPayment.findFirst({
            where: params
        }).catch(err => {
            throw new Error('error getting orderPayment list from database')
        })

        if(orderPayment){
            return orderPayment
        }
        
    }

    async save(orderPayment: Omit<OrderPayment, "id" | "modified" | "created">): Promise<{ id: number }> {
        
        const created = await prismaClient.orderPayment.create({
            data: orderPayment
        }).catch(err => {
            console.log(err)
            throw new Error('error creating new orderPayment in database')
        })

        if(created){
            return {id: created.id}
        }

    }

    async saveMany(ordersPayments: Omit<OrderPayment, "id" | "modified" | "created">[]): Promise<{ ordersPaymentsCreated: number }> {
        
        const created = await prismaClient.orderPayment.createMany({
            data: ordersPayments,
            skipDuplicates: true
        }).catch(err => {
            console.log(err)
            throw new Error('error creating new ordersPayments in database')
        })

        if(created.count == 0){
            throw new Error('any ordersPayments created')
        }
        
        return {ordersPaymentsCreated: created.count}
    }

    async update(orderPayment: Partial<Omit<OrderPayment, "id" | "orderId" | "modified" | "created">>, id: number): Promise<OrderPayment> {

        const updated = await prismaClient.orderPayment.update({
            data: orderPayment,
            where: { id }
        }).catch(err => {
            console.log(err)
            throw new Error('error updating orderPayment in database')
        })

        if(updated){
            return updated
        }
    }

    async delete(id: FindOrderPaymentParam): Promise<number> {
        
        const deleted = await prismaClient.orderPayment.delete({
            where: id
        }).catch(err => {
            console.log(err)
            throw new Error('error deleting orderPayment in database')
        })

        if(deleted){
            return deleted.id
        }

    }

}