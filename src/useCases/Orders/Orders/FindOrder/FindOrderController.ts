import { Request, Response } from 'express';
import { FindOrderUseCase } from './FindOrderUseCase';

export class FindOrderController {
    constructor(
        private findOrderUseCase: FindOrderUseCase,
    ){}
    
    async handle(request: Request, response: Response): Promise<Response>{
        
        const { body } = request
        
        try {
            const order = await this.findOrderUseCase.execute(body)
            response.status(201).json({ order })
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            })
        }
        
    }
}