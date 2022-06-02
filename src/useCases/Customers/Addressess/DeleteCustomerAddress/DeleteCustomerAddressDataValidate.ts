import { DeleteCustomerAddressRequestDTO } from './DeleteCustomerAddressRequestDTO'

export class DeleteCustomerAddressDataValidate {
    
    execute(data: DeleteCustomerAddressRequestDTO){
        
        if(typeof data == 'undefined'){
            throw new Error('missing parameters in the body')
        }

        if(typeof data.id != 'number'){
            throw new Error('missing data id in the body')
        }

        return
    }
}