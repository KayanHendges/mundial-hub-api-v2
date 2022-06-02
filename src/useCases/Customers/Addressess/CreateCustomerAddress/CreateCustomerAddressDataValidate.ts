import { notIncludesTheKeys } from '../../../../services/dataValidate/notIncludesTheKeys'
import { CreateCustomerAddressRequestDTO } from './CreateCustomerAddressRequestDTO'

export class CreateCustomerAddressDataValidate {

    execute(data: CreateCustomerAddressRequestDTO){
        
        if(typeof data == 'undefined'){
            throw new Error('missing customer data in the body')
        }

        const address = data.address

        const availableFields = [
            'customerId', 'type', 'name', 'recipient', 'address',
            'number', 'complement', 'neighborhood', 'city',
            'state', 'zipCode', 'country', 'active',
        ]
        notIncludesTheKeys(availableFields, address)

        // customerId

        if(typeof address.customerId != 'number'){
            throw new Error('missing address customerId in the body')
        }
        
        // type

        if(typeof address.type != 'string'){
            throw new Error('missing address type in the body')
        }
        
        if(address.type.length == 0){
            throw new Error('the customer type cant be empty')
        }

        // name 

        if(typeof address.name != 'undefined' && address.name != null){
        
            if(typeof address.name != 'string'){
                throw new Error('missing address name is not a number')
            }
            
            if(address.name.length == 0){
                throw new Error('the address name cant be empty')
            }
            
        }

        // recipient

        if(typeof address.recipient != 'undefined' && address.recipient != null){
        
            if(typeof address.recipient != 'string'){
                throw new Error('missing address recipient is not a number')
            }
            
            if(address.recipient.length == 0){
                throw new Error('the customer recipient cant be empty')
            }
            
        
        }

        // address 

        if(typeof address.address != 'string'){
            throw new Error('missing address in the body')
        }
        
        if(address.address.length == 0){
            throw new Error('the address cant be empty')
        }

        // number

        if(typeof address.number != 'undefined' && address.number != null){
        
            if(typeof address.number != 'string'){
                throw new Error('missing address number is not a number')
            }
            
            if(address.number.length == 0){
                throw new Error('the address number cant be empty')
            }
            
        }

        // complement

        if(typeof address.complement != 'undefined' && address.complement != null){
        
            if(typeof address.complement != 'string'){
                throw new Error('missing address complement is not a number')
            }
            
            if(address.complement.length == 0){
                throw new Error('the address complement cant be empty')
            }
            
        }

        if(typeof address.neighborhood != 'undefined' && address.neighborhood != null){
        
            if(typeof address.neighborhood != 'string'){
                throw new Error('missing address neighborhood is not a number')
            }
            
            if(address.neighborhood.length == 0){
                throw new Error('the address neighborhood cant be empty')
            }
            
        }

        // city

        if(typeof address.city != 'string'){
            throw new Error('missing address city in the body')
        }
        
        if(address.city.length == 0){
            throw new Error('the address city cant be empty')
        }

        // state

        if(typeof address.state != 'string'){
            throw new Error('missing address state in the body')
        }
        
        if(address.state.length == 0){
            throw new Error('the address state cant be empty')
        }

        // zipCode

        if(typeof address.zipCode != 'string'){
            throw new Error('missing address zipCode in the body')
        }
        
        if(address.zipCode.length == 0){
            throw new Error('the address zipCode cant be empty')
        }

        // country

        if(typeof address.country != 'string'){
            throw new Error('missing address country in the body')
        }
        
        if(address.country.length == 0){
            throw new Error('the address country cant be empty')
        }

        // active

        if(typeof address.active != 'boolean'){
            throw new Error('missing address active in the body')
        }

        return
    }
}