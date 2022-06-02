import { Request, Response } from 'express';
import { FindOrderPaymentUseCase } from './FindOrderPaymentUseCase';

export class FindOrderPaymentController {
    constructor(
        private findOrderPaymentUseCase: FindOrderPaymentUseCase,
    ){}
    
    async handle(request: Request, response: Response): Promise<Response>{
        
        const { body } = request
        
        try {
            const payment = await this.findOrderPaymentUseCase.execute(body)
            response.status(201).json({ payment })
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            })
        }
        
    }
}