import { FindCustomerAddressRequestDTO } from './FindCustomerAddressRequestDTO'

export class FindCustomerAddressDataValidate {
    
    execute(data: FindCustomerAddressRequestDTO){
        
        if(typeof data == 'undefined'){
            throw new Error('missing parameters in the body')
        }

        if(typeof data.id != 'number'){
            throw new Error('missing data id in the body')
        }

        return
    }
}