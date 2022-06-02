import { addHours, isValid, parseISO } from 'date-fns'
import { notIncludesTheKeys } from '../../../../services/dataValidate/notIncludesTheKeys'
import { UpdateOrderFinanceRequestDTO } from './UpdateOrderFinanceRequestDTO'

export class UpdateOrderFinanceDataValidate {
    
    execute(data: UpdateOrderFinanceRequestDTO){

        const id = data.id

        if(typeof id != 'number'){
            throw new Error('missing id in the body')
        }
        
        const finance = data.finance

        if(typeof finance == 'undefined'){
            throw new Error('missing finance data in the body')
        }

        const availableFields = [ 'type', 'value', 'date', 'applied' ]
        notIncludesTheKeys(availableFields, finance)


        // type

        if(typeof finance.type != 'undefined'){
        
            if(typeof finance.type != 'string'){
                throw new Error('missing finance type is not a number')
            }
            
            if(finance.type.length == 0){
                throw new Error('the finance type cant be empty')
            }
            
        }

        // value 

        if(typeof finance.value != 'undefined'){
        
            if(typeof finance.value != 'number'){
                throw new Error('missing finance value is not a number')
            }
        
        }

        // date

        if(typeof finance.date != 'undefined'){
            
            if(typeof finance.date != 'object' && typeof finance.date != 'string'){
                throw new Error('missing finance date data in the body')
            }
    
            if(typeof finance.date == 'string'){
    
                try {
                    data.finance.date = addHours(parseISO(finance.date), -3)
                } catch (err) {
                    throw new Error(`failed to parse the finance date. date-fns error: ${err}`)
                }
    
            }
    
            if(typeof finance.date == 'object'){
                
                if(!isValid(finance.date)){
                    throw new Error('the payment date is a wrong format')
                }
            }
            
        }

        // applied

        if(typeof finance.applied != 'undefined'){
        
            if(typeof finance.applied != 'boolean'){
                throw new Error('finance applied is not a boolean')
            }
        
        }

        return
        
    }
}