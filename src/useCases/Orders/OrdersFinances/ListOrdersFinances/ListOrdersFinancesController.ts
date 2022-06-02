import { Request, Response } from 'express';
import { ListOrdersFinancesUseCase } from './ListOrdersFinancesUseCase';

export class ListOrdersFinancesController {
    constructor(
        private listOrdersFinancesUseCase: ListOrdersFinancesUseCase,
    ){}
    
    async handle(request: Request, response: Response): Promise<Response>{
        
        const { body } = request
        
        try {
            const finances = await this.listOrdersFinancesUseCase.execute(body)
            response.status(201).json( finances )
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            })
        }
        
    }
}