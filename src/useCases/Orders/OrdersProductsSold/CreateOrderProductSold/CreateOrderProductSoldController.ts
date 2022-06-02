import { Request, Response } from 'express';
import { CreateOrderProductSoldUseCase } from './CreateOrderProductSoldUseCase';

export class CreateOrderProductSoldController {
    constructor(
        private createOrderProductSoldUseCase: CreateOrderProductSoldUseCase,
    ){}
    
    async handle(request: Request, response: Response): Promise<Response>{
        
        const { body } = request
        
        try {
            const { createdId } = await this.createOrderProductSoldUseCase.execute(body)
            response.status(201).json({ createdId })
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            })
        }
        
    }
}