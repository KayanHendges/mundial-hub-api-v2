import { Request, Response } from 'express';
import { CreateOrderInvoiceUseCase } from './CreateOrderInvoiceUseCase';

export class CreateOrderInvoiceController {
    constructor(
        private createOrderInvoiceUseCase: CreateOrderInvoiceUseCase,
    ){}
    
    async handle(request: Request, response: Response): Promise<Response>{
        
        const { body } = request
        
        try {
            const { createdId } = await this.createOrderInvoiceUseCase.execute(body)
            response.status(201).json({ createdId })
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            })
        }
        
    }
}