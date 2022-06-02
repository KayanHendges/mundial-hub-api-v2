import { Request, Response } from 'express';
import { ListOrdersProductsSoldUseCase } from './ListOrdersProductsSoldUseCase';

export class ListOrdersProductsSoldController {
    constructor(
        private listOrdersProductsSoldUseCase: ListOrdersProductsSoldUseCase,
    ){}
    
    async handle(request: Request, response: Response): Promise<Response>{
        
        const { body } = request
        
        try {
            const products = await this.listOrdersProductsSoldUseCase.execute(body)
            response.status(201).json( products )
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            })
        }
        
    }
}