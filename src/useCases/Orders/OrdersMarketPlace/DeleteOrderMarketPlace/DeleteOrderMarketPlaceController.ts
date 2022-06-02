import { Request, Response } from 'express';
import toIntOrNull from '../../../../services/dataFormat/number/toIntOrNull';
import { DeleteOrderMarketPlaceUseCase } from './DeleteOrderMarketPlaceUseCase';

export class DeleteOrderMarketPlaceController {
    constructor(
        private deleteOrderMarketPlaceUseCase: DeleteOrderMarketPlaceUseCase,
    ){}
    
    async handle(request: Request, response: Response): Promise<Response>{
        
        const { params } = request
        
        try {
            const { deletedId } = await this.deleteOrderMarketPlaceUseCase.execute({ id: toIntOrNull(params.id) })
            response.status(201).json({ deletedId })
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            })
        }
        
    }
}