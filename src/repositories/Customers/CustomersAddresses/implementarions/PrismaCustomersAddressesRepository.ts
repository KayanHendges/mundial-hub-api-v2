import { prismaClient } from "../../../../dataBase/prismaClient";
import { CustomerAddress } from "../../../../entities/Customer/CustomerAddress";
import pagingToPrisma from "../../../../prismaClient/functions/paging";
import { FindCustomerAddressParam, ICustomersAddressesRepository, ListCustomersAddressesParams, ListCustomersAddressesResponse } from "../ICustomersAddressesRepository";

export class PrismaCustomersAddressesRepository implements ICustomersAddressesRepository {
    
    async list(params?: ListCustomersAddressesParams): Promise<ListCustomersAddressesResponse> {
        
        const paramsName = params?.customersAddresses?.name
        const containsName = paramsName? {
            contains: paramsName
        } : undefined

        const customersAddresses = await prismaClient.customerAddress.findMany({
            where: {
                ...params?.customersAddresses,
                name: containsName
            },
            orderBy: params?.sort,
            ...pagingToPrisma(params?.paging),
        })
        .catch(err => {
            console.log(err)
            throw new Error('error getting customers addresses list from database')
        })

        if(customersAddresses){
            return {
                customersAddresses,
                total: customersAddresses.length,
                sort: params?.sort,
                paging: params?.paging
            }
        }

    }

    async find(params: FindCustomerAddressParam): Promise<CustomerAddress> {
        
        const customerAddress = await prismaClient.customerAddress.findFirst({
            where: params
        }).catch(err => {
            throw new Error('error getting customerAddress list from database')
        })

        if(customerAddress){
            return customerAddress
        }
        
    }

    async save(customerAddress: Omit<CustomerAddress, "id" | "modified" | "created">): Promise<{ id: number; }> {
        
        const created = await prismaClient.customerAddress.create({
            data: customerAddress
        }).catch(err => {
            console.log(err)
            throw new Error('error creating new customerAddress in database')
        })

        if(created){
            return {id: created.id}
        }

    }

    async saveMany(customersAddresses: Omit<CustomerAddress, "id" | "modified" | "created">[]): Promise<{customersAddressesCreated: number}> {
        
        const created = await prismaClient.customerAddress.createMany({
            data: customersAddresses,
            skipDuplicates: true
        }).catch(err => {
            console.log(err)
            throw new Error('error creating new customerAddresses in database')
        })

        if(created.count == 0){
            throw new Error('any customersAddresses created')
        }
        
        return {customersAddressesCreated: created.count}
    }

    async update(customerAddress: Partial<Omit<CustomerAddress, "id" | "add" | "modified" | "created">>, id: number): Promise<CustomerAddress> {

        const updated = await prismaClient.customerAddress.update({
            data: customerAddress,
            where: { id }
        }).catch(err => {
            console.log(err)
            throw new Error('error updating customerAddress in database')
        })

        if(updated){
            return  updated
        }
    }

    async delete(id: number): Promise<number> {
        
        const deleted = await prismaClient.customerAddress.delete({
            where: { id }
        }).catch(err => {
            console.log(err)
            throw new Error('error deleting customerAddress in database')
        })

        if(deleted){
            return deleted.id
        }

    }
}