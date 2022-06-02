import { Request, Response } from 'express';
import { UpdateOrderNoteUseCase } from './UpdateOrderNoteUseCase';

export class UpdateOrderNoteController {
    constructor(
        private updateOrderNoteUseCase: UpdateOrderNoteUseCase,
    ){}
    
    async handle(request: Request, response: Response): Promise<Response>{
        
        const { body } = request
        
        try {
            const updated = await this.updateOrderNoteUseCase.execute(body)
            response.status(201).json({
                message: `order note ${updated.id} updated with success`,
                updated
            })
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            })
        }
        
    }
}