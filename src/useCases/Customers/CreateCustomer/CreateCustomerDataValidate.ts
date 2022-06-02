import { notIncludesTheKeys } from "../../../services/dataValidate/notIncludesTheKeys";
import { CreateCustomerRequestDTO } from "./CreateCustomerRequestDTO";

export class CreateCustomerDataValidate {
    
    execute(data: CreateCustomerRequestDTO){

        if(typeof data == 'undefined'){
            throw new Error('missing customer data in the body')
        }
        
        const customer = data.customer

        if(typeof customer == 'undefined'){
            throw new Error('missing customer data in the body')
        }

        const availableFields = ['name', 'cpf', 'cnpj', 'email', 'phone', 'cellphone' ]
        notIncludesTheKeys(availableFields, customer)

        if(typeof customer.name != 'string'){
            throw new Error('missing customer name in the body')
        }    

        if(customer.name.length == 0){
            throw new Error('the customer name cant be empty')
        }

        // atleast cpf or cnpj

        if(typeof customer.cpf != 'string' && typeof customer.cnpj != 'string'){
            throw new Error('at least cpf or cnpj is required')
        }

        // implement cpf validator

        if(typeof customer.cpf != 'undefined' && customer.cpf != null){
        
            if(typeof customer.cpf != 'string'){
                throw new Error('missing customer cpf is not a string')
            }
            
            if(customer.cpf.length == 0){
                throw new Error('the customer cpf cant be empty')
            }
            
            data.customer.cpf = data.customer.cpf.replace(/[^A-Z0-9]+/ig, "")
        }

        // implement cnpj validator

        if(typeof customer.cnpj != 'undefined' && customer.cnpj != null){
        
            if(typeof customer.cnpj != 'string'){
                throw new Error('missing customer cnpj is not a string')
            }
            
            if(customer.cnpj.length == 0){
                throw new Error('the customer cnpj cant be empty')
            }
            
            data.customer.cnpj = data.customer.cnpj.replace(/[^A-Z0-9]+/ig, "")
        }

        // email

        if(typeof customer.email != 'undefined' && customer.email != null){
        
            if(typeof customer.email != 'string'){
                throw new Error('missing customer email is not a number')
            }
            
            if(customer.email.length == 0){
                throw new Error('the customer email cant be empty')
            }
            
        }

        // atleast cellphone or phone

        if(typeof customer.cellphone != 'string' && typeof customer.phone != 'string'){
            throw new Error('at least one cellphone or phone is required')
        }

        // implement cellphone validator

        if(typeof customer.cellphone == 'string'){


            if(customer.cellphone.length == 0){
                throw new Error('the customer cellphone is invalid')
            }

            data.customer.cellphone = data.customer.cellphone.replace(/[^A-Z0-9]+/ig, "")
        }

        // implement phone validator

        if(typeof customer.phone == 'string'){


            if(customer.phone.length == 0){
                throw new Error('the customer phone is invalid')
            }

            data.customer.phone = data.customer.phone.replace(/[^A-Z0-9]+/ig, "")
        }

        return
    }
}