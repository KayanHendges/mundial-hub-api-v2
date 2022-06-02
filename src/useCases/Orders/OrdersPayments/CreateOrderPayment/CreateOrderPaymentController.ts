import { Request, Response } from 'express';
import { CreateOrderPaymentUseCase } from './CreateOrderPaymentUseCase';

export class CreateOrderPaymentController {
    constructor(
        private createOrderPaymentUseCase: CreateOrderPaymentUseCase,
    ){}
    
    async handle(request: Request, response: Response): Promise<Response>{
        
        const { body } = request
        
        try {
            const createdId = await this.createOrderPaymentUseCase.execute(body)
            response.status(201).json({ createdId })
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            })
        }
        
    }
}