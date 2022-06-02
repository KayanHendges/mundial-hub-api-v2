import { prismaClient } from "../../../../dataBase/prismaClient";
import { OrderComplete } from "../../../../entities/Order/OrderComplete";
import pagingToPrisma from "../../../../prismaClient/functions/paging";
import { FindOrderCompleteParam, IOrdersCompleteRepository, ListOrdersCompleteParams, ListOrdersCompleteResponse } from "../IOrdersCompleteRepository";

export class PrismaOrdersCompleteRepository implements IOrdersCompleteRepository {

    async list(params?: ListOrdersCompleteParams): Promise<ListOrdersCompleteResponse> {

        const orders = await prismaClient.order.findMany({
            where: params?.orders,
            include: {
                customer: {
                    include: {
                        addresses: {}
                    }
                },
                marketPlaceOrder: {},
                finances: {},
                notes: {},
                payments: {},
                invoices: {},
                productsSold: {},
                transporter: {},
            },
            orderBy: params?.sort,
            ...pagingToPrisma(params?.paging),
        })
        .catch(err => {
            console.log(err)
            throw new Error('error getting orders list from database')
        })

        if(orders){
            return {
                orders,
                total: orders.length,
                sort: params?.sort,
                paging: params?.paging
            }
        }

    }

    async find(params: FindOrderCompleteParam): Promise<OrderComplete> {
        
        const order = await prismaClient.order.findFirst({
            where: params,
            include: {
                customer: {
                    include: {
                        addresses: {}
                    }
                },
                marketPlaceOrder: {},
                finances: {},
                notes: {},
                payments: {},
                invoices: {},
                productsSold: {},
                transporter: {},
            },
        }).catch(err => {
            throw new Error('error getting order list from database')
        })

        if(order){
            return order
        }
        
    }

    async delete(id: number): Promise<number> {

        const deleted = await prismaClient.order.delete({
            where: { id },
        }).catch(err => {
            console.log(err)
            throw new Error('error deleting order in database')
        })

        if(deleted){
            return deleted.id
        }

    }
}