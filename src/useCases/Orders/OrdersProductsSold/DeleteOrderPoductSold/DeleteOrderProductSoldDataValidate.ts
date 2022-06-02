import { DeleteOrderProductSoldRequestDTO } from './DeleteOrderProductSoldRequestDTO'

export class DeleteOrderProductSoldDataValidate {
    
    execute(data: DeleteOrderProductSoldRequestDTO){
        
        const id = data.id

        if(typeof id != 'number'){
            throw new Error('missing id in the body')
        }

        return
        
    }
}