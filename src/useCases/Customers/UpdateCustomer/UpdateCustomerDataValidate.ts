import { notIncludesTheKeys } from "../../../services/dataValidate/notIncludesTheKeys";
import { UpdateCustomerRequestDTO } from "./UpdateCustomerRequestDTO";

export class UpdateCustomerDataValidate {
    
    execute(data: UpdateCustomerRequestDTO){

        if(typeof data == 'undefined'){
            throw new Error('missing customer data in the body')
        }

        // id 

        if(typeof data.id != 'number'){
            throw new Error('missing customer id in the body')
        }


        // customer


        const customer = data.customer

        if(typeof customer == 'undefined'){
            throw new Error('missing customer data in the body')
        }

        const availableFields = ['name', 'cpf', 'cnpj', 'email', 'phone', 'cellphone' ]
        notIncludesTheKeys(availableFields, customer)

        if(typeof customer.name != 'undefined'){

            if(typeof customer.name != 'string'){
                throw new Error('missing customer name in the body')
            }    
    
            if(customer.name.length == 0){
                throw new Error('the customer name cant be empty')
            }

        }

        // cpf
        // implement cpf validator

        if(typeof customer.cpf != 'undefined'){

            if(typeof customer.cpf != 'string'){
                throw new Error('missing customer cpf in the body or its not a string')
            }

            if(customer.cpf.length == 0){
                throw new Error('the customer cpf is invalid')
            }
    
            data.customer.cpf = data.customer.cpf.replace(/[^A-Z0-9]+/ig, "")

        }

        // cnpj
        // implement cnpj validator

        if(typeof customer.cnpj != 'undefined' && customer.cnpj != null){

            if(typeof customer.cnpj != 'string'){
                throw new Error('missing customer cnpj in the body or its not a string')
            }

            if(customer.cnpj.length == 0){
                throw new Error('the customer cnpj is invalid')
            }
    
            data.customer.cnpj = data.customer.cnpj.replace(/[^A-Z0-9]+/ig, "")

        }


        // email

        if(typeof customer.email != 'undefined'){

            if(typeof customer.email != 'string'){
                throw new Error('missing customer email in the body or its not a string')
            }

            if(customer.email.length == 0){
                throw new Error('the customer email is invalid')
            }

        }

        // cellphone
        // implement cellphone validator

        if(typeof customer.cellphone == 'string'){

            if(customer.cellphone.length == 0){
                throw new Error('the customer cellphone is invalid')
            }

            data.customer.cellphone = data.customer.cellphone.replace(/[^A-Z0-9]+/ig, "")
        }

        // phone
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