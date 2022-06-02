import { Request, Response } from 'express';
import { CreateOrderFinanceUseCase } from './CreateOrderFinanceUseCase';

export class CreateOrderFinanceController {
    constructor(
        private createOrderFinanceUseCase: CreateOrderFinanceUseCase,
    ){}
    
    async handle(request: Request, response: Response): Promise<Response>{
        
        const { body } = request
        
        try {
            const { createdId } = await this.createOrderFinanceUseCase.execute(body)
            response.status(201).json({ createdId })
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            })
        }
        
    }
}