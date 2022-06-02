import { ListOrdersNotesDataValidate } from './ListOrdersNotesDataValidate'
import { ListOrdersNotesRequestDTO } from './ListOrdersNotesRequestDTO'
import { OrderNote } from '../../../../entities/Order/OrderNote'
import { IOrdersNotesRepository } from '../../../../repositories/Orders/OrdersNotes/IOrdersNotesRepository'


export class ListOrdersNotesUseCase {
    constructor(
        private listOrdersNotesDataValidate: ListOrdersNotesDataValidate,
        private ordersNotesRepository: IOrdersNotesRepository
    ){}
    
    async execute(data: ListOrdersNotesRequestDTO): Promise<{ ordersNotes: OrderNote[] }>{
        
        try {
            await this.listOrdersNotesDataValidate.execute(data)            
        } catch (err) {
            throw new Error(err)
        }
        
        const { notes: fields, paging, sort } = data

        const notes = await this.ordersNotesRepository.list({
            ordersNotes: fields,
            paging,
            sort
        })
        .catch( err => { throw new Error(err) } )

        if(notes){
            return notes
        }
    }
}