import { Request, Response } from 'express';
import { ListOrdersPaymentsUseCase } from './ListOrdersPaymentsUseCase';

export class ListOrdersPaymentsController {
    constructor(
        private listOrdersPaymentsUseCase: ListOrdersPaymentsUseCase,
    ){}
    
    async handle(request: Request, response: Response): Promise<Response>{
        
        const { body } = request
        
        try {
            const ordersPayments = await this.listOrdersPaymentsUseCase.execute(body)
            response.status(201).json( ordersPayments )
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            })
        }
        
    }
}