import { Request, Response } from 'express';
import { FindOrderNoteUseCase } from './FindOrderNoteUseCase';

export class FindOrderNoteController {
    constructor(
        private findOrderNoteUseCase: FindOrderNoteUseCase,
    ){}
    
    async handle(request: Request, response: Response): Promise<Response>{
        
        const { body } = request
        
        try {
            const note = await this.findOrderNoteUseCase.execute(body)
            response.status(201).json({ note })
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            })
        }
        
    }
}