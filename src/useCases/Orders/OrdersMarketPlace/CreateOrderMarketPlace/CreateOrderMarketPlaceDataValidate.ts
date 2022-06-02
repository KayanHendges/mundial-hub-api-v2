import { notIncludesTheKeys } from '../../../../services/dataValidate/notIncludesTheKeys'
import { CreateOrderMarketPlaceRequestDTO } from './CreateOrderMarketPlaceRequestDTO'

export class CreateOrderMarketPlaceDataValidate {
    
    execute(data: CreateOrderMarketPlaceRequestDTO){
 
        const order = data.orderMarketPlace

        if(typeof order == 'undefined'){
            throw new Error('missing order data in the body')
        }

        const availableFields = [ 'orderId', 'name', 'marketPlaceOrderId', 'link' ]
        notIncludesTheKeys(availableFields, order)

        // orderId

        if(typeof order.orderId != 'number'){
            throw new Error('missing orderId in the body')
        }

        // name

        if(typeof order.name != 'string'){
            throw new Error('missing order name in the body')
        }
        
        if(order.name.length == 0){
            throw new Error('the order name cant be empty')
        }

        // marketPlaceOrderId 

        if(typeof order.marketPlaceOrderId != 'string'){
            throw new Error('missing order marketPlaceOrderId in the body')
        }

        // link

        if(typeof order.link != 'undefined' && order.link != null){
        
            if(typeof order.link != 'string'){
                throw new Error('missing order link is not a number')
            }
            
            if(order.link.length == 0){
                throw new Error('the order link cant be empty')
            }
            
        }

        return
        
    }
}