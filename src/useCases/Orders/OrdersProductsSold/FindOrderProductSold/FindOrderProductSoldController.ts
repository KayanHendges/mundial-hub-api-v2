import { Request, Response } from 'express';
import { FindOrderProductSoldUseCase } from './FindOrderProductSoldUseCase';

export class FindOrderProductSoldController {
    constructor(
        private findOrderProductSoldUseCase: FindOrderProductSoldUseCase,
    ){}
    
    async handle(request: Request, response: Response): Promise<Response>{
        
        const { body } = request
        
        try {
            const productSold = await this.findOrderProductSoldUseCase.execute(body)
            response.status(201).json({ productSold })
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected  error.'
            })
        }
        
    }
}