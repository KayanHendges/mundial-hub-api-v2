import { OrderNote } from '../../../../entities/Order/OrderNote'
import { IOrdersNotesRepository } from '../../../../repositories/Orders/OrdersNotes/IOrdersNotesRepository'
import { UpdateOrderNoteDataValidate } from './UpdateOrderNoteDataValidate'
import { UpdateOrderNoteRequestDTO } from './UpdateOrderNoteRequestDTO'

export class UpdateOrderNoteUseCase {
    constructor(
        private updateOrderNoteDataValidate: UpdateOrderNoteDataValidate,
        private ordersNotesRepository: IOrdersNotesRepository
    ){}
    
    async execute(data: UpdateOrderNoteRequestDTO): Promise<OrderNote>{
        
        try {
            await this.updateOrderNoteDataValidate.execute(data)
        } catch (err) {
            throw new Error(err)
        }
        
        const { note, id } = data

        const updated = await this.ordersNotesRepository.update(note, id)
        .catch( err => { throw new Error(err) } )

        if(updated){
            return updated
        }

    }
}