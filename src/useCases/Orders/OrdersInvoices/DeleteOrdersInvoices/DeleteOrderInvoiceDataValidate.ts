import { DeleteOrderInvoiceRequestDTO } from './DeleteOrderInvoiceRequestDTO'

export class DeleteOrderInvoiceDataValidate {
    
    execute(data: DeleteOrderInvoiceRequestDTO){
 
        const id = data.id

        if(typeof id != 'number'){
            throw new Error('missing id in the body')
        }

        return
        
    }
}