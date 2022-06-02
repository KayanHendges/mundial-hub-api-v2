import { Request, Response } from 'express';
import { ListOrdersNotesUseCase } from './ListOrdersNotesUseCase';

export class ListOrdersNotesController {
    constructor(
        private listOrdersNotesUseCase: ListOrdersNotesUseCase,
    ){}
    
    async handle(request: Request, response: Response): Promise<Response>{
        
        const { body } = request
        
        try {
            const notes = await this.listOrdersNotesUseCase.execute(body)
            response.status(201).json(notes)
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            })
        }
        
    }
}