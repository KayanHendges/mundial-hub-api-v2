import { prismaClient } from "../../../../dataBase/prismaClient";
import { OrderMarketPlaceOrder } from "../../../../entities/Order/OrderMarketPlaceOrder";
import pagingToPrisma from "../../../../prismaClient/functions/paging";
import { FindOrderMarketPlaceOrderParam, IOrdersMarketPlacesRepository, ListOrdersMarketPlacesParams, ListOrdersMarketPlacesResponse } from "../IOrdersMarketPlacesRepository";

export class PrismaOrdersMarketPlacesRepository implements IOrdersMarketPlacesRepository {

    async list(params?: ListOrdersMarketPlacesParams): Promise<ListOrdersMarketPlacesResponse> {

        const ordersMarketPlace = await prismaClient.orderMarketPlaceOrder.findMany({
            where: params?.ordersMarketPlaces,
            orderBy: params?.sort,
            ...pagingToPrisma(params?.paging),
        })
        .catch(err => {
            console.log(err)
            throw new Error('error getting ordersMarketPlaces list from database')
        })

        if(ordersMarketPlace){
            return {
                ordersMarketPlace,
                total: ordersMarketPlace.length,
                sort: params?.sort,
                paging: params?.paging
            }
        }

    }

    async find(params: FindOrderMarketPlaceOrderParam): Promise<OrderMarketPlaceOrder> {
        
        const orderMarketPlaceOrder = await prismaClient.orderMarketPlaceOrder.findFirst({
            where: params
        }).catch(err => {
            throw new Error('error getting orderMarketPlaceOrder list from database')
        })

        if(orderMarketPlaceOrder){
            return orderMarketPlaceOrder
        }
        
    }

    async save(orderMarketPlaceOrder: Omit<OrderMarketPlaceOrder, "id" | "modified" | "created">): Promise<{ id: number; }> {
        
        const created = await prismaClient.orderMarketPlaceOrder.create({
            data: orderMarketPlaceOrder
        }).catch(err => {
            console.log(err)
            throw new Error('error creating new orderMarketPlaceOrder in database')
        })

        if(created){
            return {id: created.id}
        }

    }

    async saveMany(ordersMarketPlaces: Omit<OrderMarketPlaceOrder, "id" | "modified" | "created">[]): Promise<{ ordersMarketPlacesCreated: number; }> 
    {
        
        const created = await prismaClient.orderMarketPlaceOrder.createMany({
            data: ordersMarketPlaces,
            skipDuplicates: true
        }).catch(err => {
            console.log(err)
            throw new Error('error creating new orderMarketPlaceOrder in database')
        })

        if(created.count == 0){
            throw new Error('any orderMarketPlaceOrder created')
        }
        
        return {ordersMarketPlacesCreated: created.count}
    }

    async update(orderMarketPlaceOrder: Partial<Omit<OrderMarketPlaceOrder, "id" | "orderId" | "modified" | "created">>, id: number): Promise<OrderMarketPlaceOrder> {

        const updated = await prismaClient.orderMarketPlaceOrder.update({
            data: orderMarketPlaceOrder,
            where: { id }
        }).catch(err => {
            console.log(err)
            throw new Error('error updating orderMarketPlaceOrder in database')
        })

        if(updated){
            return updated
        }
    }

    async delete(id: FindOrderMarketPlaceOrderParam): Promise<number> {
        
        const deleted = await prismaClient.orderMarketPlaceOrder.delete({
            where: id
        }).catch(err => {
            console.log(err)
            throw new Error('error deleting OrderMarketPlaceOrder in database')
        })

        if(deleted){
            return deleted.id
        }

    }

}