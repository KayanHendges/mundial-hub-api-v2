import { DeleteOrderPaymentRequestDTO } from './DeleteOrderPaymentRequestDTO'

export class DeleteOrderPaymentDataValidate {
    
    execute(data: DeleteOrderPaymentRequestDTO){
        
        const id = data.id

        if(typeof id != 'number'){
            throw new Error('missing id in the body')
        }
        
        return
        
    }
}