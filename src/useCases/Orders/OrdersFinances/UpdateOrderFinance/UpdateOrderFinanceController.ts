import { Request, Response } from 'express';
import { UpdateOrderFinanceUseCase } from './UpdateOrderFinanceUseCase';

export class UpdateOrderFinanceController {
    constructor(
        private updateOrderFinanceUseCase: UpdateOrderFinanceUseCase,
    ){}
    
    async handle(request: Request, response: Response): Promise<Response>{
        
        const { body } = request
        
        try {
            const { updated } = await this.updateOrderFinanceUseCase.execute(body)
            response.status(201).json({ 
                message: `order finance with id ${updated.id} updated with success`,
                updated
             })
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            })
        }
        
    }
}