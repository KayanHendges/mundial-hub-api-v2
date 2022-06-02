import { prismaClient } from "../../../../dataBase/prismaClient";
import { Order } from "../../../../entities/Order/Order";
import pagingToPrisma from "../../../../prismaClient/functions/paging";
import { FindOrderParam, IOrdersRepository, ListOrdersParams, ListOrdersResponse } from "../IOrdersRepository";

export class PrismaOrdersRepository implements IOrdersRepository {
    
    async list(params?: ListOrdersParams): Promise<ListOrdersResponse> {

        const orders = prismaClient.order.findMany({
            where: params?.orders,
            orderBy: params?.sort,
            ...pagingToPrisma(params?.paging),
        })
        .catch(err => {
            console.log(err)
            throw new Error('error getting orders list from database')
        })

        const total = prismaClient.order.count({
            
        })
        .catch( err => { throw new Error('error gettint total orders from database') } )

        await Promise.all([orders, total])
        .catch( err => { throw new Error(err) } )

        if(orders){
            return {
                orders: await orders,
                total: await total,
                sort: params?.sort,
                paging: params?.paging
            }
        }

    }

    async find(params: FindOrderParam): Promise<Order> {
        
        const order = await prismaClient.order.findFirst({
            where: params
        }).catch(err => {
            throw new Error('error getting order list from database')
        })

        if(order){
            return order
        }
        
    }

    async save(order: Omit<Order, "id" >): Promise<{ id: number; }> {
        
        const created = await prismaClient.order.create({
            data: order
        }).catch(err => {
            throw new Error('error creating new order in database')
        })

        if(created){
            return {id: created.id}
        }

    }

    async saveMany(orders: Omit<Order, "id" | "modified" | "created">[]): Promise<{ ordersCreated: number; }> {
        
        const created = await prismaClient.order.createMany({
            data: orders,
            skipDuplicates: true
        }).catch(err => {
            console.log(err)
            throw new Error('error creating new orders in database')
        })

        if(created.count == 0){
            throw new Error('any orders created')
        }
        
        return {ordersCreated: created.count}
    }

    async update(order: Partial<Omit<Order, "id" | "modified" | "created">>, id: number): Promise<void> {

        const updated = await prismaClient.order.update({
            data: order,
            where: { id }
        }).catch(err => {
            console.log(err)
            throw new Error('error updating order in database')
        })

        if(updated){
            return 
        }
    }

    async delete(id: number): Promise<void> {
        
        const deleted = await prismaClient.order.delete({
            where: { id }
        }).catch(err => {
            console.log(err)
            throw new Error('error deleting order in database')
        })

        if(deleted){
            return 
        }

    }
}