import { Request, Response } from 'express';
import { CreateOrderNoteUseCase } from './CreateOrderNoteUseCase';

export class CreateOrderNoteController {
    constructor(
        private createOrderNoteUseCase: CreateOrderNoteUseCase,
    ){}
    
    async handle(request: Request, response: Response): Promise<Response>{
        
        const { body } = request
        
        try {
            const { createdId } = await this.createOrderNoteUseCase.execute(body)
            response.status(201).json({ createdId })
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            })
        }
        
    }
}