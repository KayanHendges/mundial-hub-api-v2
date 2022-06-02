import { prismaClient } from "../../../dataBase/prismaClient";
import { Transporter } from "../../../entities/Transporter/Transporter";
import pagingToPrisma from "../../../prismaClient/functions/paging";
import { ITransporterRepository, ListTransportersParams, ListTransportersResponse, TransporterParams } from "../ITransporterRepository";

export class PrismaTransporterRepository implements ITransporterRepository {
    async list(params?: ListTransportersParams): Promise<ListTransportersResponse> {
        
        const transporters = await prismaClient.transporter.findMany({
            where: {
                ...params?.fields,
                name: {
                    contains: params?.fields?.name
                }
            },
            orderBy: params?.sort,
            ...pagingToPrisma(params?.paging)

        }).catch(err => {
            console.log(err)
            throw new Error('error getting transporters list from database')
        })

        if(transporters){

            
            return {
                transporters,
                total: transporters.length,
                sort: params?.sort,
                paging: params?.paging
            }
        }
    }

    async find(params: Pick<TransporterParams, "id" | "externalId">): Promise<Transporter> {

        const transporter = await prismaClient.transporter.findFirst({
            where: params,
        }).catch(err => {
            throw new Error('error getting transporter list from database')
        })

        return transporter
    }

    async save(transporter: Omit<Transporter, "id" | 'modified' | 'created'>): Promise<{ id: number; }> {
        
        const created = await prismaClient.transporter.create({
            data: transporter
        }).catch(err => {
            console.log(err)
            throw new Error('error creating new transporter in database')
        })

        if(created){
            return {id: created.id}
        }
    }

    async update(transporter: Partial<Omit<Transporter, "id" | "modified" | "created">>, id: number): Promise<void> {

        const updated = await prismaClient.transporter.update({
            data: transporter,
            where: { id }
        }).catch(err => {
            console.log(err)
            throw new Error('error updating transporter in database')
        })

        if(updated){
            return 
        }
    }
    
    async delete(id: number): Promise<void> {

        const deleted = await prismaClient.transporter.delete({
            where: { id }
        }).catch(err => {
            console.log(err)
            throw new Error('error deleting transporter in database')
        })

        if(deleted){
            return 
        }
    }
}