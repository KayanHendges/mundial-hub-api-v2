import { prismaClient } from "../../../../dataBase/prismaClient";
import { OrderFinance } from "../../../../entities/Order/OrderFinance";
import pagingToPrisma from "../../../../prismaClient/functions/paging";
import { FindOrderFinanceParam, IOrdersFinancesRepository, ListOrdersFinancesParams, ListOrdersFinancesResponse } from "../IOrdersFinancesRepository";

export class PrismaOrdersFinancesRepository implements IOrdersFinancesRepository {
    
    async list(params?: ListOrdersFinancesParams): Promise<ListOrdersFinancesResponse> {

        const ordersFinances = await prismaClient.orderFinance.findMany({
            where: params?.ordersFinances,
            orderBy: params?.sort,
            ...pagingToPrisma(params?.paging),
        })
        .catch(err => {
            console.log(err)
            throw new Error('error getting ordersFinances list from database')
        })

        if(ordersFinances){
            return {
                ordersFinances,
                total: ordersFinances.length,
                sort: params?.sort,
                paging: params?.paging
            }
        }

    }

    async find(params: FindOrderFinanceParam): Promise<OrderFinance> {
        
        const orderFinance = await prismaClient.orderFinance.findFirst({
            where: params
        }).catch(err => {
            throw new Error('error getting orderFinance list from database')
        })

        if(orderFinance){
            return orderFinance
        }
        
    }

    async save(orderFinance: Omit<OrderFinance, "id" | "modified" | "created">): Promise<{ id: number; }> {
        
        const created = await prismaClient.orderFinance.create({
            data: orderFinance
        }).catch(err => {
            console.log(err)
            throw new Error('error creating new orderFinance in database')
        })

        if(created){
            return {id: created.id}
        }

    }

    async saveMany(ordersFinances: Omit<OrderFinance, "id" | "modified" | "created">[]): Promise<{ ordersFinancesCreated: number; }> {
        
        const created = await prismaClient.orderFinance.createMany({
            data: ordersFinances,
            skipDuplicates: true
        }).catch(err => {
            console.log(err)
            throw new Error('error creating new ordersFinances in database')
        })

        if(created.count == 0){
            throw new Error('any ordersFinances created')
        }
        
        return {ordersFinancesCreated: created.count}
    }

    async update(orderFinance: Partial<Omit<OrderFinance, "id" | "orderId" | "modified" | "created">>, id: number): Promise<OrderFinance> {

        const updated = await prismaClient.orderFinance.update({
            data: orderFinance,
            where: { id }
        }).catch(err => {
            console.log(err)
            throw new Error('error updating orderFinance in database')
        })

        if(updated){
            return updated
        }
    }

    async delete(id: FindOrderFinanceParam): Promise<number> {
        
        const deleted = await prismaClient.orderFinance.delete({
            where: id
        }).catch(err => {
            console.log(err)
            throw new Error('error deleting orderFinance in database')
        })

        if(deleted){
            return deleted.id
        }

    }
}