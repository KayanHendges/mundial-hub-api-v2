import { Request, Response } from 'express';
import { UpdateOrderInvoiceUseCase } from './UpdateOrderInvoiceUseCase';

export class UpdateOrderInvoiceController {
    constructor(
        private updateOrderInvoiceUseCase: UpdateOrderInvoiceUseCase,
    ){}
    
    async handle(request: Request, response: Response): Promise<Response>{
        
        const { body } = request
        
        try {
            const updated = await this.updateOrderInvoiceUseCase.execute(body)
            response.status(201).json({
                message: `order invoice with id ${updated.id} updated with success`,
                updated 
            })
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            })
        }
        
    }
}