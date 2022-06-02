import { FindOrderPaymentRequestDTO } from './FindOrderPaymentRequestDTO'

export class FindOrderPaymentDataValidate {
    
    execute(data: FindOrderPaymentRequestDTO){
        
        const id = data.id

        if(typeof id != 'number'){
            throw new Error('missing id in the body')
        }
        
        return
        
    }
}