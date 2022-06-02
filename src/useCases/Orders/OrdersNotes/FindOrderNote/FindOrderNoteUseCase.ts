import { OrderNote } from '../../../../entities/Order/OrderNote'
import { IOrdersNotesRepository } from '../../../../repositories/Orders/OrdersNotes/IOrdersNotesRepository'
import { FindOrderNoteDataValidate } from './FindOrderNoteDataValidate'
import { FindOrderNoteRequestDTO } from './FindOrderNoteRequestDTO'

export class FindOrderNoteUseCase {
    constructor(
        private findOrderNoteDataValidate: FindOrderNoteDataValidate,
        private ordersNotesRepository: IOrdersNotesRepository
    ){}
    
    async execute(data: FindOrderNoteRequestDTO): Promise<OrderNote>{
        
        try {
            await this.findOrderNoteDataValidate.execute(data)
        } catch (err) {
            throw new Error(err)
        }
        
        const { id } = data

        const note = await this.ordersNotesRepository.find({ id })
        .catch( err => { throw new Error(err) } )

        if(note){
            return note
        }
    }
}