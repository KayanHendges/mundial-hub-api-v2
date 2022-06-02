import { prismaClient } from "../../../../dataBase/prismaClient";
import { OrderProductSold } from "../../../../entities/Order/OrderProductSold";
import pagingToPrisma from "../../../../prismaClient/functions/paging";
import { FindOrderProductSoldParam, IOrdersProductsSoldRepository, ListOrdersProductsSoldParams, ListOrdersProductsSoldResponse } from "../IOrdersProductsSoldRepository";

export class PrismaOrdersProductsSoldRepository implements IOrdersProductsSoldRepository {

    async list(params?: ListOrdersProductsSoldParams): Promise<ListOrdersProductsSoldResponse> {

        const ordersProductsSold = await prismaClient.orderProductSold.findMany({
            where: params?.ordersProductsSold,
            orderBy: params?.sort,
            ...pagingToPrisma(params?.paging),
        })
        .catch(err => {
            console.log(err)
            throw new Error('error getting ordersProductsSold list from database')
        })

        if(ordersProductsSold){
            return {
                ordersProductsSold,
                total: ordersProductsSold.length,
                sort: params?.sort,
                paging: params?.paging
            }
        }

    }

    async find(params: FindOrderProductSoldParam): Promise<OrderProductSold> {
        
        const orderProductSold = await prismaClient.orderProductSold.findFirst({
            where: params
        }).catch(err => {
            throw new Error('error getting orderProductSold list from database')
        })

        if(orderProductSold){
            return orderProductSold
        }
        
    }

    async save(orderProductSold: Omit<OrderProductSold, "id" | "modified" | "created">): Promise<{ id: number; }> {
        
        const created = await prismaClient.orderProductSold.create({
            data: orderProductSold
        }).catch(err => {
            console.log(err)
            throw new Error('error creating new orderProductSold in database')
        })

        if(created){
            return {id: created.id}
        }

    }

    async saveMany(ordersProductsSold: Omit<OrderProductSold, "id" | "modified" | "created">[]): Promise<{ ordersProductsSoldCreated: number; }> {
        
        const created = await prismaClient.orderProductSold.createMany({
            data: ordersProductsSold,
            skipDuplicates: true
        }).catch(err => {
            console.log(err)
            throw new Error('error creating new ordersProductsSold in database')
        })

        if(created.count == 0){
            throw new Error('any ordersProductsSold created')
        }
        
        return {ordersProductsSoldCreated: created.count}
    }

    async update(orderProductSold: Partial<Omit<OrderProductSold, "id" | "orderId" | "modified" | "created">>, id: number): Promise<OrderProductSold> {

        const updated = await prismaClient.orderProductSold.update({
            data: orderProductSold,
            where: { id }
        }).catch(err => {
            console.log(err)
            throw new Error('error updating orderProductSold in database')
        })

        if(updated){
            return updated
        }
    }

    async delete(id: FindOrderProductSoldParam): Promise<number> {
        
        const deleted = await prismaClient.orderProductSold.delete({
            where: id
        }).catch(err => {
            console.log(err)
            throw new Error('error deleting orderProductSold in database')
        })

        if(deleted){
            return deleted.id
        }

    }
    
}