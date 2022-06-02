import { Request, Response } from 'express';
import { ImportTrayOrderUseCase } from './ImportTrayOrderUseCase';

export class ImportTrayOrderController {
    constructor(
        private importTrayOrderUseCase: ImportTrayOrderUseCase,
    ){}
    
    async handle(request: Request, response: Response): Promise<Response>{
        
        const { body } = request
        
        try {
            const { createdId } = await this.importTrayOrderUseCase.execute(body)
            response.status(201).json({ createdId })
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            })
        }
        
    }
}