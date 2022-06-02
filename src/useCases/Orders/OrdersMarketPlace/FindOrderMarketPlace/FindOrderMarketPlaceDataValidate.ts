import { FindOrderMarketPlaceRequestDTO } from './FindOrderMarketPlaceRequestDTO'

export class FindOrderMarketPlaceDataValidate {
    
    execute(data: FindOrderMarketPlaceRequestDTO){
        
        const id = data?.id
        const orderId = data?.orderId

        // at least id or orderId

        if(typeof id != 'number' && typeof orderId != 'number' ){
            throw new Error('at least id or orderId is required')
        }

        // id
        
        if(typeof id != 'undefined'){
        
            if(typeof id != 'number'){
                throw new Error('missing id is not a number')
            }
        
        }

        // orderId

        if(typeof orderId != 'undefined'){
        
            if(typeof orderId != 'number'){
                throw new Error('missing orderId is not a number')
            }

        }

        return
        
    }
}