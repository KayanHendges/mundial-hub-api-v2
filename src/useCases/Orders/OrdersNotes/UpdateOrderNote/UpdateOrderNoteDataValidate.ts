import { notIncludesTheKeys } from '../../../../services/dataValidate/notIncludesTheKeys'
import { UpdateOrderNoteRequestDTO } from './UpdateOrderNoteRequestDTO'

export class UpdateOrderNoteDataValidate {
    
    execute(data: UpdateOrderNoteRequestDTO){
        
        const id = data.id

        if(typeof id != 'number'){
            throw new Error('missing id in the body')
        }

        const note = data.note

        if(typeof note == 'undefined'){
            throw new Error('missing note data in the body')
        }

        const availableFields = [ 'description', 'by' ]
        notIncludesTheKeys(availableFields, note)

        if(typeof note.description != 'undefined'){
        
            if(typeof note.description != 'string'){
                throw new Error('note description is not a number')
            }
            
            if(note.description.length == 0){
                throw new Error('the note description cant be empty')
            }
            
        }

        if(typeof note.by != 'undefined'){
        
            if(typeof note.by != 'string'){
                throw new Error('note by is not a number')
            }
            
            if(note.by.length == 0){
                throw new Error('the note by cant be empty')
            }
            
        }

        return
        
    }
}