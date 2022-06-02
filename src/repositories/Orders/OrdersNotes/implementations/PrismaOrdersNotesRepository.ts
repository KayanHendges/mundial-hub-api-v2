import { prismaClient } from '../../../../dataBase/prismaClient'
import { OrderNote } from '../../../../entities/Order/OrderNote'
import pagingToPrisma from '../../../../prismaClient/functions/paging'
import { FindOrderNoteParam, IOrdersNotesRepository, ListOrdersNotesParams, ListOrdersNotesResponse } from '../IOrdersNotesRepository'

export class PrismaOrdersNotesRepository implements IOrdersNotesRepository {

    async list(params?: ListOrdersNotesParams): Promise<ListOrdersNotesResponse> {

        const ordersNotes = await prismaClient.orderNote.findMany({
            where: params?.ordersNotes,
            orderBy: params?.sort,
            ...pagingToPrisma(params?.paging),
        })
        .catch(err => {
            console.log(err)
            throw new Error('error getting ordersNotes list from database')
        })

        if(ordersNotes){
            return {
                ordersNotes,
                total: ordersNotes.length,
                sort: params?.sort,
                paging: params?.paging
            }
        }

    }

    async find(params: FindOrderNoteParam): Promise<OrderNote> {
        
        const orderNote = await prismaClient.orderNote.findFirst({
            where: params
        }).catch(err => {
            throw new Error('error getting orderNote list from database')
        })

        if(orderNote){
            return orderNote
        }
        
    }

    async save(orderNote: Omit<OrderNote, 'id' | 'modified' | 'created'>): Promise<{ id: number }> {
        
        const created = await prismaClient.orderNote.create({
            data: orderNote
        }).catch(err => {
            console.log(err)
            throw new Error('error creating new orderNote in database')
        })

        if(created){
            return {id: created.id}
        }

    }

    async saveMany(ordersNotes: Omit<OrderNote, 'id' | 'modified' | 'created'>[]): Promise<{ ordersNotesCreated: number }> {
        
        const created = await prismaClient.orderNote.createMany({
            data: ordersNotes,
            skipDuplicates: true
        }).catch(err => {
            console.log(err)
            throw new Error('error creating new ordersNotes in database')
        })

        if(created.count == 0){
            throw new Error('any ordersNotes created')
        }
        
        return {ordersNotesCreated: created.count}
    }

    async update(orderNote: Partial<Omit<OrderNote, 'id' | 'orderId' | 'modified' | 'created'>>, id: number): Promise<OrderNote> {

        const updated = await prismaClient.orderNote.update({
            data: orderNote,
            where: { id }
        }).catch(err => {
            console.log(err)
            throw new Error('error updating orderNote in database')
        })

        if(updated){
            return updated
        }
    }

    async delete(id: FindOrderNoteParam): Promise<number> {
        
        const deleted = await prismaClient.orderNote.delete({
            where: id
        }).catch(err => {
            console.log(err)
            throw new Error('error deleting orderNote in database')
        })

        if(deleted){
            return deleted.id
        }

    }

}