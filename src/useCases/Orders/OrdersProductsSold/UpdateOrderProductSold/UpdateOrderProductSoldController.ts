import { Request, Response } from 'express';
import { UpdateOrderProductSoldUseCase } from './UpdateOrderProductSoldUseCase';

export class UpdateOrderProductSoldController {
    constructor(
        private updateOrderProductSoldUseCase: UpdateOrderProductSoldUseCase,
    ){}
    
    async handle(request: Request, response: Response): Promise<Response>{
        
        const { body } = request
        
        try {
            const updated = await this.updateOrderProductSoldUseCase.execute(body)
            response.status(201).json({
                message: `the product sold with id ${updated.id} updated with success`,
                updated
            })
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            })
        }
        
    }
}