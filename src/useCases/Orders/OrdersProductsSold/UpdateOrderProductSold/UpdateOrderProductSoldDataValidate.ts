import toFloatOrNull from '../../../../services/dataFormat/number/toFloatOrNull'
import { notIncludesTheKeys } from '../../../../services/dataValidate/notIncludesTheKeys'
import { UpdateOrderProductSoldRequestDTO } from './UpdateOrderProductSoldRequestDTO'

export class UpdateOrderProductSoldDataValidate {
    
    execute(data: UpdateOrderProductSoldRequestDTO){
        
        const id = data.id

        if(typeof id != 'number'){
            throw new Error('missing id in the body')
        }

        const product = data.productSold

        if(typeof product == 'undefined'){
            throw new Error('missing product data in the body')
        }

        const availableFields = [
            'orderId', 'trayId', 'trayKitId',
            'productId', 'kitId', 'reference',
            'quantity' ,'name', 'cost', 'price', 'paidPrice',
        ]
        notIncludesTheKeys(availableFields, product)


        // trayId

        if(typeof product.trayId != 'undefined'){
        
            if(typeof product.trayId != 'number' && product.trayId != null){
                throw new Error('missing product trayId is not a number or not null')
            }
        
        }

        // trayKitId

        if(typeof product.trayKitId != 'undefined'){
        
            if(typeof product.trayKitId != 'number' && product.trayKitId != null){
                throw new Error('missing product trayKitId is not a number or not null')
            }
        
        }

        // productId

        if(typeof product.productId != 'undefined'){
        
            if(typeof product.productId != 'number' && product.productId != null){
                throw new Error('missing product productId is not a number or not null')
            }
        
        }

        // kitId

        if(typeof product.kitId != 'undefined'){
        
            if(typeof product.kitId != 'number' && product.kitId != null){
                throw new Error('missing product kitId is not a number or not null')
            }
        
        }

        // reference

        if(typeof product.reference != 'undefined'){
        
            if(typeof product.reference != 'string'){
                throw new Error('missing product reference is not a number')
            }
            
            if(product.reference.length == 0){
                throw new Error('the product reference cant be empty')
            }
            
        }

        // quantity

        if(typeof product.quantity != 'number'){
            throw new Error('missing product quantity in the body')
        }
        
        // name 

        if(typeof product.name != 'undefined'){
        
            if(typeof product.name != 'string'){
                throw new Error('missing product name is not a number')
            }
            
            if(product.name.length == 0){
                throw new Error('the product name cant be empty')
            }
            
        }

        // cost

        if(typeof product.cost != 'undefined' && product.cost != null){
        
            if(typeof product.cost != 'number'){
                throw new Error('missing product cost is not a number')
            }
        
        }

        
        // price

        if(typeof product.price != 'undefined' && product.price != null){
        
            if(typeof product.price != 'number'){
                throw new Error('missing product price is not a number')
            }
        
        }

        // paidPrice

        if(typeof product.paidPrice != 'undefined' && product.paidPrice != null){
        
            if(typeof product.paidPrice != 'number'){
                throw new Error('missing product paidPrice is not a number')
            }
        
        }

        return
        
    }
}