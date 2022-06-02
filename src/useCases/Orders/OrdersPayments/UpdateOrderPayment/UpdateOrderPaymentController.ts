import { Request, Response } from 'express';
import { UpdateOrderPaymentUseCase } from './UpdateOrderPaymentUseCase';

export class UpdateOrderPaymentController {
    constructor(
        private updateOrderPaymentUseCase: UpdateOrderPaymentUseCase,
    ){}
    
    async handle(request: Request, response: Response): Promise<Response>{
        
        const { body } = request
        
        try {
            const updated = await this.updateOrderPaymentUseCase.execute(body)
            response.status(201).json({ 
                message: `order payment ${updated.id} updated with success`,
                updated
             })
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            })
        }
        
    }
}