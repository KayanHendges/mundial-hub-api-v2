import { FindOrderProductSoldRequestDTO } from './FindOrderProductSoldRequestDTO'

export class FindOrderProductSoldDataValidate {
    
    execute(data: FindOrderProductSoldRequestDTO){
        
        const id = data.id

        if(typeof id != 'number'){
            throw new Error('missing id in the body')
        }

        return
        
    }
}