import { IOrdersRepository } from '../../../../repositories/Orders/Orders/IOrdersRepository'
import { IOrdersNotesRepository } from '../../../../repositories/Orders/OrdersNotes/IOrdersNotesRepository'
import { CreateOrderNoteDataValidate } from './CreateOrderNoteDataValidate'
import { CreateOrderNoteRequestDTO } from './CreateOrderNoteRequestDTO'

export class CreateOrderNoteUseCase {
    constructor(
        private createOrderNoteDataValidate: CreateOrderNoteDataValidate,
        private ordersNotesRepository: IOrdersNotesRepository,
        private ordersRepository: IOrdersRepository
    ){}
    
    async execute(data: CreateOrderNoteRequestDTO): Promise<{ createdId: number }>{
        
        try {
            await this.createOrderNoteDataValidate.execute(data)
        } catch (err) {
            throw new Error(err)
        }
        
        const { note } = data

        const orderExists = await this.ordersRepository.find({ id: note.orderId })
        .catch( err => { throw new Error(err) } )

        if(!orderExists){
            throw new Error(`the order ${note.orderId} does not exists`)
        }

        const { id: createdId } = await this.ordersNotesRepository.save(note)
        .catch( err => { throw new Error(err) } )

        if(createdId){
            return { createdId }
        }
        
    }
}