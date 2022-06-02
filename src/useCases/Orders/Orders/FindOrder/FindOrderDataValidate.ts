import { FindOrderRequestDTO } from './FindOrderRequestDTO'

export class FindOrderDataValidate {
    
    execute(data: FindOrderRequestDTO){
        
        const id = data?.id

        if(typeof id != 'number'){
            throw new Error('missing id in the body')
        }

        return
        
    }
}