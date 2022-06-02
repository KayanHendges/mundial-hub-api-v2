import { IOrdersNotesRepository } from '../../../../repositories/Orders/OrdersNotes/IOrdersNotesRepository'
import { DeleteOrderNoteDataValidate } from './DeleteOrderNoteDataValidate'
import { DeleteOrderNoteRequestDTO } from './DeleteOrderNoteRequestDTO'

export class DeleteOrderNoteUseCase {
    constructor(
        private deleteOrderNoteDataValidate: DeleteOrderNoteDataValidate,
        private ordersNotesRepository: IOrdersNotesRepository
    ){}
    
    async execute(data: DeleteOrderNoteRequestDTO): Promise<{ deletedId: number }>{
        
        try {
            await this.deleteOrderNoteDataValidate.execute(data)
        } catch (err) {
            throw new Error(err)
        }
        
        const { id } = data

        const deletedId = await this.ordersNotesRepository.delete({ id })
        .catch( err => { throw new Error(err) } )

        if(deletedId){
            return { deletedId }
        }
    }
}