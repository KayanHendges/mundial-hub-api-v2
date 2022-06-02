import { Request, Response } from 'express';
import { FindOrderInvoiceUseCase } from './FindOrderInvoiceUseCase';

export class FindOrderInvoiceController {
    constructor(
        private findOrderInvoiceUseCase: FindOrderInvoiceUseCase,
    ){}
    
    async handle(request: Request, response: Response): Promise<Response>{
        
        const { body } = request
        
        try {
            const invoice = await this.findOrderInvoiceUseCase.execute(body)
            response.status(201).json({ invoice })
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            })
        }
        
    }
}