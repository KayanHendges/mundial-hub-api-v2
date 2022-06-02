import { notIncludesTheKeys } from '../../../../services/dataValidate/notIncludesTheKeys'
import { UpdateCustomerAddressRequestDTO } from './UpdateCustomerAddressRequestDTO'

export class UpdateCustomerAddressDataValidate {
    
    execute(data: UpdateCustomerAddressRequestDTO){
        
        if(typeof data == 'undefined'){
            throw new Error('missing customer data in the body')
        }

        if(typeof data.id != 'number'){
            throw new Error('missing customerAddress id in the body')
        }

        const address = data.address

        const availableFields = [
            'type', 'name', 'recipient', 'address',
            'number', 'complement', 'neighborhood', 'city',
            'state', 'zipCode', 'country', 'active',
        ]
        notIncludesTheKeys(availableFields, address)
        
        // type

        if(typeof address.type != 'undefined'){
        
            if(typeof address.type != 'string'){
                throw new Error('missing address type is not a number')
            }
            
            if(address.type.length == 0){
                throw new Error('the address type cant be empty')
            }
            
        }

        // name 

        if(typeof address.name != 'undefined'){
        
            if(typeof address.name != 'string'){
                throw new Error('missing address name is not a number')
            }
            
            if(address.name.length == 0){
                throw new Error('the address name cant be empty')
            }
            
        }

        // recipient

        if(typeof address.recipient != 'undefined'){
        
            if(typeof address.recipient != 'string'){
                throw new Error('missing address recipient is not a number')
            }
            
            if(address.recipient.length == 0){
                throw new Error('the customer recipient cant be empty')
            }
            
        
        }

        // address 

        if(typeof address.address != 'undefined'){
        
            if(typeof address.address != 'string'){
                throw new Error('missing address address is not a number')
            }
            
            if(address.address.length == 0){
                throw new Error('the address address cant be empty')
            }
            
        }

        // number

        if(typeof address.number != 'undefined'){
        
            if(typeof address.number != 'number'){
                throw new Error('missing address number is not a number')
            }
        
        }

        // complement

        if(typeof address.complement != 'undefined'){
        
            if(typeof address.complement != 'string'){
                throw new Error('missing address complement is not a number')
            }
            
            if(address.complement.length == 0){
                throw new Error('the address complement cant be empty')
            }
            
        }

        if(typeof address.neighborhood != 'undefined'){
        
            if(typeof address.neighborhood != 'string'){
                throw new Error('missing address neighborhood is not a number')
            }
            
            if(address.neighborhood.length == 0){
                throw new Error('the address neighborhood cant be empty')
            }
            
        }

        // city

        if(typeof address.city != 'undefined'){
        
            if(typeof address.city != 'string'){
                throw new Error('missing address city is not a number')
            }
            
            if(address.city.length == 0){
                throw new Error('the address city cant be empty')
            }
            
        }

        // state

        if(typeof address.state != 'undefined'){
        
            if(typeof address.state != 'string'){
                throw new Error('missing address state is not a number')
            }
            
            if(address.state.length == 0){
                throw new Error('the address state cant be empty')
            }
            
        }

        // zipCode

        if(typeof address.zipCode != 'undefined'){
        
            if(typeof address.zipCode != 'string'){
                throw new Error('missing address zipCode is not a number')
            }
            
            if(address.zipCode.length == 0){
                throw new Error('the address zipCode cant be empty')
            }
            
        }

        // country

        if(typeof address.country != 'undefined'){
        
            if(typeof address.country != 'string'){
                throw new Error('missing address country is not a number')
            }
            
            if(address.country.length == 0){
                throw new Error('the address country cant be empty')
            }
            
        }

        // active

        if(typeof address.active != 'undefined'){
        
            if(typeof address.active != 'boolean'){
                throw new Error('missing address active is not a boolean')
            }
        
        }

        return
        
    }
}