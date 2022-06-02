import { prismaClient } from "../../../../dataBase/prismaClient";
import { Customer } from "../../../../entities/Customer/Customer";
import pagingToPrisma from "../../../../prismaClient/functions/paging";
import { FindCustomerParam, ICustomersRepository, ListCustomersParams, ListCustomersResponse } from "../ICustomersRepository";

export class PrismaCustomersRepository implements ICustomersRepository{
    async list(params?: ListCustomersParams): Promise<ListCustomersResponse> {
        
        const customers = await prismaClient.customer.findMany({
            where: {
                ...params?.customers,
                name: {
                    contains: params?.customers?.name,
                },
                email: {
                    contains: params?.customers?.email,
                },
                cpf: {
                    contains: params?.customers?.cpf,
                },
                cnpj: {
                    contains: params?.customers?.cnpj,
                }
            },
            orderBy: params?.sort,
            ...pagingToPrisma(params?.paging),
            include: {
                addresses: {}
            }
            
        })
        .catch(err => {
            console.log(err)
            throw new Error('error getting transporters list from database')
        })

        if(customers){
            return {
                customers,
                total: customers.length,
                sort: params?.sort,
                paging: params?.paging
            }
        }

    }

    async find(params: Partial<FindCustomerParam>): Promise<Customer> {

        const customer = await prismaClient.customer.findFirst({
            where: params,
            include: {
                addresses: {}
            }
        }).catch(err => {
            throw new Error('error getting customer list from database')
        })

        if(customer){
            return customer
        }
    }

    async save(customer: Omit<Customer, "id" | "addresses" | "modified" | "created">): Promise<{ id: number; }> {

        const created = await prismaClient.customer.create({
            data: customer
        }).catch(err => {
            console.log(err)
            throw new Error('error creating new customer in database')
        })

        if(created){
            return {id: created.id}
        }
    }

    async update(customer: Partial<Omit<Customer, "id" | "addresses" | "modified" | "created">>, id: number): Promise<Omit<Customer, 'addresses'>> {
        
        const updated = await prismaClient.customer.update({
            data: customer,
            where: { id }
        }).catch(err => {
            console.log(err)
            throw new Error('error updating customer in database')
        })

        if(updated){
            return updated
        }

    }

    async delete(id: number): Promise<void> {
        
        const deleted = await prismaClient.customer.delete({
            where: { id }
        }).catch(err => {
            console.log(err)
            throw new Error('error deleting customer in database')
        })

        if(deleted){
            return 
        }

    }
}