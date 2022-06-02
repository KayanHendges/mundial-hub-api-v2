import { FindOrderFinanceRequestDTO } from './FindOrderFinanceRequestDTO'

export class FindOrderFinanceDataValidate {
    
    execute(data: FindOrderFinanceRequestDTO){
        
        const id = data.id

        if(typeof id != 'number'){
            throw new Error('missing id in the body')
        }
        
        return
        
    }
}