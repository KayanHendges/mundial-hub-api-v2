import { addHours, format, isMatch, isValid, parse, parseISO } from 'date-fns'
import { notIncludesTheKeys } from '../../../../services/dataValidate/notIncludesTheKeys'
import { UpdateOrderPaymentRequestDTO } from './UpdateOrderPaymentRequestDTO'

export class UpdateOrderPaymentDataValidate {
    
    execute(data: UpdateOrderPaymentRequestDTO){

        const id = data.id

        if(typeof id != 'number'){
            throw new Error('missing id in the body')
        }
        
        const payment = data.payment
        
        const availableFields = [ 'method', 'value', 'date' ]
        notIncludesTheKeys(availableFields, payment)

        if(typeof payment == 'undefined'){
            throw new Error('missing payment data in the body')
        }

        // method

        if(typeof payment.method != 'string'){
            throw new Error('missing payment method in the body')
        }
        
        if(payment.method.length == 0){
            throw new Error('the payment method cant be empty')
        }

        // value

        if(typeof payment.value != 'number'){
            throw new Error('missing payment value in the body')
        }

        // date

        if(typeof payment.date != 'undefined'){
            
            if(typeof payment.date != 'object' && typeof payment.date != 'string'){
                throw new Error('missing payment date data in the body')
            }
    
            if(typeof payment.date == 'string'){
    
                try {
                    data.payment.date = addHours(parseISO(payment.date), -3)
                } catch (err) {
                    throw new Error(`failed to parse the payment date. date-fns error: ${err}`)
                }
    
            }
    
            if(typeof payment.date == 'object'){
                
                if(!isValid(payment.date)){
                    throw new Error('the payment date is a wrong format')
                }
            }
            
        }


        return
    }
}