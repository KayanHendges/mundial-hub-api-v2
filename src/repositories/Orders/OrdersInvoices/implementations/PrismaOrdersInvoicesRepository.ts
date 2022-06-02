import { OrderInvoice } from "@prisma/client"
import { prismaClient } from "../../../../dataBase/prismaClient"
import pagingToPrisma from "../../../../prismaClient/functions/paging"
import { FindOrderInvoicesParam, IOrdersInvoicesRepository, ListOrdersInvoicesParams, ListOrdersInvoicesResponse } from "../IOrdersInvoicesRepository"

export class PrismaOrdersInvoicesRepository implements IOrdersInvoicesRepository {
    
    async list(params?: ListOrdersInvoicesParams): Promise<ListOrdersInvoicesResponse> {

        const ordersInvoices = await prismaClient.orderInvoice.findMany({
            where: params?.ordersInvoices,
            orderBy: params?.sort,
            ...pagingToPrisma(params?.paging),
        })
        .catch(err => {
            console.log(err)
            throw new Error('error getting ordersInvoices list from database')
        })

        if(ordersInvoices){
            return {
                ordersInvoices,
                total: ordersInvoices.length,
                sort: params?.sort,
                paging: params?.paging
            }
        }

    }

    async find(params: FindOrderInvoicesParam): Promise<OrderInvoice> {
        
        const orderInvoice = await prismaClient.orderInvoice.findFirst({
            where: params
        }).catch(err => {
            throw new Error('error getting orderInvoice list from database')
        })

        if(orderInvoice){
            return orderInvoice
        }
        
    }

    async save(orderInvoice: Omit<OrderInvoice, "id" | "modified" | "created">): Promise<{ id: number }> {
        
        const created = await prismaClient.orderInvoice.create({
            data: orderInvoice
        }).catch(err => {
            console.log(err)
            throw new Error('error creating new orderInvoice in database')
        })

        if(created){
            return {id: created.id}
        }

    }

    async saveMany(ordersInvoices: Omit<OrderInvoice, "id" | "modified" | "created">[]): Promise<{ ordersInvoicesCreated: number }> {
        
        const created = await prismaClient.orderInvoice.createMany({
            data: ordersInvoices,
            skipDuplicates: true
        }).catch(err => {
            console.log(err)
            throw new Error('error creating new ordersInvoices in database')
        })

        if(created.count == 0){
            throw new Error('any ordersInvoices created')
        }
        
        return {ordersInvoicesCreated: created.count}
    }

    async update(orderInvoice: Partial<Omit<OrderInvoice, "id" | "orderId" | "modified" | "created">>, id: number): Promise<OrderInvoice> {

        const updated = await prismaClient.orderInvoice.update({
            data: orderInvoice,
            where: { id }
        }).catch(err => {
            console.log(err)
            throw new Error('error updating orderInvoice in database')
        })

        if(updated){
            return updated
        }
    }

    async delete(id: FindOrderInvoicesParam): Promise<number> {
        
        const deleted = await prismaClient.orderInvoice.delete({
            where: id
        }).catch(err => {
            console.log(err)
            throw new Error('error deleting orderInvoice in database')
        })

        if(deleted){
            return deleted.id
        }

    }
}