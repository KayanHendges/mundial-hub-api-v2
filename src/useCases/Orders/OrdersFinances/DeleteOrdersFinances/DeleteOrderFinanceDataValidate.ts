import { DeleteOrderFinanceRequestDTO } from './DeleteOrderFinanceRequestDTO'

export class DeleteOrderFinanceDataValidate {
    
    execute(data: DeleteOrderFinanceRequestDTO){
        
        const id = data.id

        if(typeof id != 'number'){
            throw new Error('missing id in the body')
        }

        return
        
    }
}