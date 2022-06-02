import { FindOrderNoteRequestDTO } from './FindOrderNoteRequestDTO'

export class FindOrderNoteDataValidate {
    
    execute(data: FindOrderNoteRequestDTO){
        
        const id = data.id

        if(typeof id != 'number'){
            throw new Error('missing id in the body')
        }
 
        return
        
    }
}