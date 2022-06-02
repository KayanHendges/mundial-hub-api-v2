import { DeleteOrderCompleteRequestDTO } from './DeleteOrderCompleteRequestDTO'

export class DeleteOrderCompleteDataValidate {
    
    execute(data: DeleteOrderCompleteRequestDTO){
 
        const id = data?.id

        if(typeof id != 'number'){
            throw new Error('missing id in the body')
        }

        return
        
    }
}