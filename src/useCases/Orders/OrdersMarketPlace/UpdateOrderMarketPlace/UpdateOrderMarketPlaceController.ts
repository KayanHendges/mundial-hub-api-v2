import { Request, Response } from 'express';
import { UpdateOrderMarketPlaceUseCase } from './UpdateOrderMarketPlaceUseCase';

export class UpdateOrderMarketPlaceController {
    constructor(
        private updateOrderMarketPlaceUseCase: UpdateOrderMarketPlaceUseCase,
    ){}
    
    async handle(request: Request, response: Response): Promise<Response>{
        
        const { body } = request
        
        try {
            const { updated } = await this.updateOrderMarketPlaceUseCase.execute(body)
            response.status(201).json({
                message: `the order marketplace with id ${updated.id}`,
                updated
            })
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            })
        }
        
    }
}