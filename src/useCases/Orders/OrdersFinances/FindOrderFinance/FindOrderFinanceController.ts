import { Request, Response } from 'express';
import { FindOrderFinanceUseCase } from './FindOrderFinanceUseCase';

export class FindOrderFinanceController {
    constructor(
        private findOrderFinanceUseCase: FindOrderFinanceUseCase,
    ){}
    
    async handle(request: Request, response: Response): Promise<Response>{
        
        const { body } = request
        
        try {
            const finance = await this.findOrderFinanceUseCase.execute(body)
            response.status(201).json({ finance })
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            })
        }
        
    }
}