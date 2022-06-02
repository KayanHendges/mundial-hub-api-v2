import { DeleteOrderMarketPlaceRequestDTO } from './DeleteOrderMarketPlaceRequestDTO'

export class DeleteOrderMarketPlaceDataValidate {
    
    execute(data: DeleteOrderMarketPlaceRequestDTO){
 
        const { id } = data

        if(typeof id != 'number'){
            throw new Error('missing id in the body')
        }

        return
        
    }
}