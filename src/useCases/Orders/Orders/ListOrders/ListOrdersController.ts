import { Request, Response } from 'express';
import { ListOrdersUseCase } from './ListOrdersUseCase';

export class ListOrdersController {
    constructor(
        private listOrdersUseCase: ListOrdersUseCase,
    ){}
    
    async handle(request: Request, response: Response): Promise<Response>{
        
        const { body } = request
        
        try {
            const orders = await this.listOrdersUseCase.execute(body)
            response.status(201).json( orders )
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            })
        }
        
    }
}