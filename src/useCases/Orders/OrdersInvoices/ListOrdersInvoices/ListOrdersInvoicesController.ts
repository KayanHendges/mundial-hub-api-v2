import { Request, Response } from 'express';
import { ListOrdersInvoicesUseCase } from './ListOrdersInvoicesUseCase';

export class ListOrdersInvoicesController {
    constructor(
        private listOrdersInvoicesUseCase: ListOrdersInvoicesUseCase,
    ){}
    
    async handle(request: Request, response: Response): Promise<Response>{
        
        const { body } = request
        
        try {
            const ordersInvoices = await this.listOrdersInvoicesUseCase.execute(body)
            response.status(201).json( ordersInvoices )
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            })
        }
        
    }
}