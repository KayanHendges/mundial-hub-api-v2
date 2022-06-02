import { notIncludesTheKeys } from '../../../../services/dataValidate/notIncludesTheKeys'
import { CreateOrderInvoiceRequestDTO } from './CreateOrderInvoiceRequestDTO'

export class CreateOrderInvoiceDataValidate {
    
    execute(data: CreateOrderInvoiceRequestDTO){
        
        const invoice = data.invoice

        if(typeof invoice == 'undefined'){
            throw new Error('missing invoice data in the body')
        }

        const availableFields = [ 'orderId', 'cnpj', 'number', 'key', 'link' ]
        notIncludesTheKeys(availableFields, invoice)

        // orderId

        if(typeof invoice.orderId != 'number'){
            throw new Error('missing invoice orderId in the body')
        }

        // cnpj

        if(typeof invoice.cnpj != 'string'){
            throw new Error('missing invoice cnpj in the body')
        }
        
        if(invoice.cnpj.length == 0){
            throw new Error('the invoice cnpj cant be empty')
        }

        data.invoice.cnpj = data.invoice.cnpj.replace(/[^A-Z0-9]+/ig, "")

        // number

        if(typeof invoice.number != 'number'){
            throw new Error('missing invoice number in the body')
        }

        // key

        if(typeof invoice.key != 'undefined'){
        
            if(typeof invoice.key != 'string'){
                throw new Error('missing invoice key is not a number')
            }
            
            if(invoice.key.length == 0){
                throw new Error('the invoice key cant be empty')
            }
            
        }

        // link 

        if(typeof invoice.link != 'undefined'){
        
            if(typeof invoice.link != 'string'){
                throw new Error('missing invoice link is not a number')
            }
            
            if(invoice.link.length == 0){
                throw new Error('the invoice link cant be empty')
            }
            
        }

        return
    }
}