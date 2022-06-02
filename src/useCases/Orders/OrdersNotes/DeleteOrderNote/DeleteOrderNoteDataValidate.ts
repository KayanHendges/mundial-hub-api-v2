import { DeleteOrderNoteRequestDTO } from './DeleteOrderNoteRequestDTO'

export class DeleteOrderNoteDataValidate {
    
    execute(data: DeleteOrderNoteRequestDTO){
        
        const id = data.id

        if(typeof id != 'number'){
            throw new Error('missing id in the body')
        }
        
        return
        
    }
}